import React, { Component, Fragment } from 'react';
import {cloneDeep, find, uniqueId, remove, clone, get} from 'lodash';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
import Tooltip from "rc-tooltip";
import axios from 'axios';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"
import { compose, withProps, lifecycle } from "recompose"
import Modal from 'react-modal';

import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
} from 'react-places-autocomplete'


Modal.setAppElement('#app');

class LocationSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '' };
    }

    handleChange = address => {
        this.setState({ address });
    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => this.props.onPlacesChanged(results[0]));
    };

    render() {
        return (
            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="form-group">
                        <label>Place</label>
                        <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input form-control',
                            })}
                        />
                        <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active'
                                    : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                    ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                    : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,
                                            style,
                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        );
    }
}


class Map extends React.PureComponent {

    constructor(props) {
        super(...arguments);
        this.addMarker = this.addMarker.bind(this);
        props.addMarker((latLng, text) => {
            let markers  = clone(this.state.markers);
            let id = uniqueId('marker-');

            markers.push({
                id: id,
                ...latLng.toJSON(),
                text,
            });
            this.setState({markers, activeMarker: id, text})
        });
        this.removeActiveMarker = this.removeActiveMarker.bind(this);
        this.updateActiveMarker = this.updateActiveMarker.bind(this);
        this.save = this.save.bind(this);
    }

    state = {
        activeMarkerText: '',
        markers: this.props.markers,
        activeMarker: null
    };

    addMarker(e) {
        let markers  = clone(this.state.markers);
        let id = uniqueId('marker-');
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'latLng': e.latLng
        }, (results, status) => {
            let text = '';
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0]) {
                    text = results[0].formatted_address;
                }
            }

            markers.push({
                id: id,
                ...e.latLng.toJSON(),
                text,
            });
            this.setState({markers, activeMarker: id, text})
        });
    }


    editMarker(id) {
        let activeMarker = find(this.state.markers, {id});
        this.setState({activeMarker: id, text: activeMarker.text});
    }
    updateActiveMarker() {
        let markers = cloneDeep(this.state.markers);
        let activeMarker = find(markers, {id: this.state.activeMarker});
        activeMarker.text = this.state.text;
        this.setState({markers, activeMarker: null})
    }


    removeActiveMarker() {
        let markers = cloneDeep(this.state.markers);
        remove(markers, {id: this.state.activeMarker});

        this.setState({markers, activeMarker: null})
    }

    save() {
        this.props.changeMarkers(this.state.markers);
    }

    renderActiveMarker() {

        return (
            <div>
                <div className="form-group">
                    <label>Window message</label>
                    <div className="ck-editor-block">
                        <CKEditor
                            editor={ InlineEditor }
                            data={this.state.text}
                            onInit={ editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log( 'Editor is ready to use!', editor );
                            } }

                            config={ {
                                toolbar: [ 'bold', 'italic', 'link', ]
                            } }

                            onChange={ ( event, editor ) => {
                                const data = editor.getData();

                                this.setState({text: data});

                            } }
                        />
                    </div>
                </div>
                <button className="btn btn-danger text-uppercase mr-3" onClick={this.removeActiveMarker}>delete</button>
                <button className="btn btn-primary text-uppercase" onClick={this.updateActiveMarker}>save</button>
            </div>
        )
    }

    render() {
        const props = this.props;

        return (
            <div className="py-3">
                <GoogleMap
                    ref={props.onMapMounted}
                    onClick={this.addMarker}
                    defaultZoom={8}
                    center={props.center}
                >
                    <LocationSearchInput onPlacesChanged={props.onPlacesChanged}/>
                    {this.state.markers.map((marker) => {

                        return (<Marker
                            key={marker.id}
                            onClick={() => this.editMarker(marker.id)}
                            position={{lat:+marker.lat, lng: +marker.lng}}

                        >
                            <InfoWindow         options={{ closeBoxURL: ``, enableEventPropagation: true }} >
                                <div style={{backgroundColor: 'white'}} dangerouslySetInnerHTML={{__html: marker.text}} />
                            </InfoWindow>
                        </Marker>)
                    })}


                </GoogleMap>
                {
                    this.state.activeMarker ? this.renderActiveMarker(): null
                }
                <hr/>
                <button className="btn btn-primary text-uppercase pull-right" onClick={this.save} >save</button>
            </div>
        )
    }
}

const MyMapComponent = compose(
    withProps({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${window.google_maps_key}&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    lifecycle({
        componentWillMount() {
            const refs = {};
            let markerAdd = () => {};
            let firstMarker = this.props.markers[0];
            let center = firstMarker ? {lat: +firstMarker.lat, lng: +firstMarker.lng} : {
                lat: 41.9, lng: -87.624
            };
            this.setState({
                bounds: null,
                center,
                onMapMounted: ref => {
                    refs.map = ref;
                },
                addMarker: (cb) => {
                    markerAdd = cb;
                },
                onBoundsChanged: () => {
                    this.setState({
                        bounds: refs.map.getBounds(),
                        center: refs.map.getCenter(),
                    })
                },
                onPlacesChanged: (a) => {
                    const nextCenter = a.geometry.location;

                    this.setState({
                        center: nextCenter,
                    });
                    markerAdd(nextCenter, a.formatted_address);
                    refs.map.fitBounds(a.geometry.bounds);
                },
            })
        },
    }),
    withScriptjs,
    withGoogleMap
)(Map);


const validators = [
    {name: 'Email', value: 'email'},
    {name: 'Phone number', value: 'phone'},
    {name: 'Integer', value: 'integer'},
    {name: 'Decimal', value: 'decimal'},
];

export default class BaseButton extends Component {
    state={
        mapModal: false,
        text: '',
        variants: [],
        buttons: [],
        variable: '',
        selectCount: 1,
        validators: [],
        calendar: '',
        calendars: [],
        errors: {},
        image: {},
        markers: []
    };


    constructor() {
        super(...arguments);
        this.addVariant = this.addVariant.bind(this);
        this.addButton = this.addButton.bind(this);
        this.changeValidator = this.changeValidator.bind(this);
        this.saveBlock = this.saveBlock.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeMarkers = this.changeMarkers.bind(this);
    }

    saveBlock() {
        let errors = {};
        let hasError = false;

        for(let i of this.requiredFields) {
            if(!this.state[i]) {
                hasError = true;
                errors[i] = true;
            }
        }

        if(!hasError) {
            this.props.onBlockChange(this.state, this.type)
        } else {
            this.setState({errors})
        }
    }

    getCalendars() {
        axios.get('/calendar/list').then(({data}) =>{
            this.setState({calendars: [{id: '', name: 'Select'}].concat(data)})
        })

    }

    changeImage(e) {
        let formData = new FormData();
        formData.append('file', e.target.files[0]);

        axios.post('/file', formData).then(({data}) => {
            this.setState({image: data})
        })

    }

    componentDidMount() {
        if(this.has('Calendar') !== -1) {
            this.getCalendars();
        }
        this.buildState();
    }

    has(name) {
        return this.renderBlocks.indexOf(name) !== -1
    }


    buildState(props= this.props) {

        this.setState(            {
                text: props.block.text || '',
                variants:  props.block.variants || (this.has('Variants') ? [{
                    id: uniqueId('variant-'),
                    text: '',
                }] : []),
                buttons:  props.block.buttons ||  (this.has('Buttons') ? [{
                    id: uniqueId('button-'),
                    text: '',
                }] : []),
                variable:  props.block.variable || '',
                selectCount:  props.block.selectCount || 1,
                validators: props.block.validators || [],
                calendar: props.block.calendar || '',
                image: props.block.image || {},
                markers: props.block.markers || [],
            }
        )
    }


    changeValidator(e) {
        let value = e.target.value;
        let validators =  clone(this.state.validators);
        let index = validators.indexOf(value);
        if(index !== -1) {
            validators.splice(index, 1);
        } else {
            validators.push(value);
        }
        this.setState({validators});
    }

    addVariant() {
        let variants  = cloneDeep(this.state.variants);
        let button =  {
            id: uniqueId('variant-'),
            text: '',
        };
        variants.push(button);
        this.setState({variants});
    }


    changeVariant(variantId) {
        return (e) => {
            let variants  = cloneDeep(this.state.variants);
            let variant = find(variants, {id: variantId});
            variant.text = e.target.value;
            this.setState({variants});

        }

    }


    deleteVariant(variantId) {
        let variants  = cloneDeep(this.state.variants);
        remove(variants, {id: variantId});

        this.setState({variants});

    }

    addButton() {
        let buttons  = cloneDeep(this.state.buttons);
        let button =  {
            id: uniqueId('button-'),
            text: '',
        };
        buttons.push(button);
        this.setState({buttons});
    }
    changeButton(buttonId) {
        return (e) => {
            let buttons  = cloneDeep(this.state.buttons);
            let button = find(buttons, {id: buttonId});
            button.text = e.target.value;
            this.setState({buttons});

        }

    }

    changeMarkers(markers) {
        this.setState({markers, mapModal: false});
    }

    deleteButton(buttonId) {
        let buttons  = cloneDeep(this.state.buttons);
        remove(buttons, {id: buttonId});

        this.setState({buttons});


    }

    componentWillUpdate(props, state) {
        const oldId = props.blockId;
        const newId = this.props.blockId;

        if(oldId !== newId) {
            this.buildState(props);
        }
    }

    renderMessage() {
        return <div className="form-group">
            <div className="label">Message <Tooltip destroyTooltipOnHide={true} placement="right" trigger={['hover']} overlay={<div className="help">
                You can use any of yours variables. Just write "@variable$" (for. ex. Hello @name$!) and it will be
                replaced with text user input in it.
            </div>}>
                <i className={'fa fa-question-circle'}/>
            </Tooltip></div>



                <div className={'message-editor'}>
                    <CKEditor
                        editor={ InlineEditor }
                        data={this.state.text}
                        onInit={ editor => {
                            // You can store the "editor" and use when it is needed.
                            // console.log( 'Editor is ready to use!', editor );
                        } }

                        config={ {
                            toolbar: [ 'bold', 'italic', 'link', ]
                        } }

                        onChange={ ( event, editor ) => {
                            const data = editor.getData();
                            let errors = cloneDeep(this.state.errors);
                            errors['text'] = false;
                            this.setState({text: data});

                        } }
                    />
                </div>
                <div className="image-load">
                    <label htmlFor="">
                        {
                            this.state.image.path && <img src={`/storage/${this.state.image.path}`} alt=""/>
                        }
                        <input type="file" onChange={this.changeImage}/>
                    </label>
                </div>

            {
                this.state.errors['text'] &&
                <div className="validation-error">
                    This field is required
                </div>
            }
        </div>
    }
    renderActions() {
        return <div className="form-group">
            <button
                type={'button'}
                className={'button accept button-inline'}
                onClick={
                    this.saveBlock
                }>OK</button>
            <button
                type={'button'}
                className={'button decline button-inline'}
                onClick={this.props.onCancel}
            >
                Cancel
            </button>
            <div className="clearfix" />
        </div>
    }
    renderVariable() {
        return <div className="form-group">
            <div className="label">Save value to variable <Tooltip destroyTooltipOnHide={true}
                                                                   placement="right" trigger={['hover']}
                                                                   overlay={<div className="help">
                Enter keyword which will be saved in statistic and which you can use in your messages
            </div>}>
                <i className={'fa fa-question-circle'}/>
            </Tooltip></div>

           <input id="" type="text" onChange={(e) =>{
            let errors = cloneDeep(this.state.errors);
            errors['variable'] = false;
            this.setState({variable: e.target.value, errors})
        }} value={this.state.variable}/>
            {
                this.state.errors['variable'] &&
                <div className="validation-error">
                    This field is required
                </div>
            }


        </div>
    }
    renderCalendar() {
        return <div className="form-group">
            <div className="label">Scheduler</div>
            <select value={this.state.calendar} onChange={(e) =>this.setState({
                calendar: e.target.value,
                calendar_name: find(this.state.calendars, {id:~~e.target.value})['name']
            })} >
                {this.state.calendars.map(({name, id}) => (<option key={id}  value={id}>{name}</option>))}
            </select>
            {
                this.state.errors['calendar'] &&
                <div className="validation-error">
                    This field is required
                </div>
            }
        </div>
    }
    renderMaxCountValues() {
        return  <div className="form-group">
            <div className="label">Max count selected items <Tooltip destroyTooltipOnHide={true}
                                                                   placement="right" trigger={['hover']}
                                                                   overlay={<div className="help">
                Interger will show how many items can select user at ones. Set 0 or empty for infinity selects
                                                                   </div>}>
                <i className={'fa fa-question-circle'}/>
            </Tooltip></div>
            <input
                type="text"
                id=""
                onChange={(e) =>this.setState({selectCount: e.target.value})}
                value={this.state.selectCount}
            />
        </div>
    }
    renderVariants() {
        return  <div className={'multi-config'}>
            <div className="form-group">
                <div className="label">Variants</div>
                <button
                    type={'button'}
                    className={'button action button-inline'}
                    onClick={this.addVariant}>
                    <i className={'button-icon  fa fa-plus'}/>
                </button>
            </div>
            {
                this.state.variants.map((variant) =>
                    <div key={variant.id}  className="form-group buttons">
                        <input className={'with-action'}
                               type="text" value={variant.text}
                               onChange={this.changeVariant(variant.id)}
                        />
                        <button
                            type={'button'}
                            className={'button action remove button-inline'}
                            onClick={() => this.deleteVariant(variant.id)}>
                            <i className={'button-icon  fa fa-remove'}/>
                        </button>
                    </div>
                )
            }

        </div>
    }

    renderMap() {
        return  <div className={'multi-config'}>
            <div className="form-group">
                <div className="label">Map</div>
            </div>
            <a className="cursor-pointer" onClick={() => this.setState({mapModal: true})}>Add/edit  location marker(s) ({this.state.markers.length})</a>
            <Modal
                isOpen={this.state.mapModal}
                onAfterOpen={() => {
                }}
                onRequestClose={() => {
                    this.setState({mapModal: false})
                }}
            >

                <MyMapComponent changeMarkers={this.changeMarkers} markers={this.state.markers} />
            </Modal>

        </div>
    }
    renderButtons() {
        return  <div className={'multi-config'}>
            <div className="form-group">
                <div className="label">Buttons</div>
                <button
                    type={'button'}
                    className={'button action button-inline'}
                    onClick={this.addButton}>
                    <i className={'button-icon  fa fa-plus'}/>
                </button>
            </div>
            {
                this.state.buttons.map((button) =>
                    <div key={button.id}  className="form-group buttons">
                        <input className={'with-action'}
                               type="text" value={button.text}
                               onChange={this.changeButton(button.id)}
                        />
                        <button
                            type={'button'}
                            className={'button action remove button-inline'}
                            onClick={() => this.deleteButton(button.id)}>
                            <i className={'button-icon  fa fa-remove'}/>
                        </button>
                    </div>
                )
            }

        </div>
    }
    renderValidators() {
        return <div className="form-group">
            <div className="label">Validators</div>
            <div>
                {validators.map((validator) =>
                    <div className="custom-control custom-checkbox" key={validator.value}>
                        <input
                            value={validator.value}
                            checked={this.state.validators.indexOf(validator.value) !== -1}
                            onChange={this.changeValidator}
                            type="checkbox"
                            className="custom-control-input"
                            id={`validator-${validator.value}`}
                        />

                        <label className="custom-control-label" htmlFor={`validator-${validator.value}`}>
                            {validator.name}
                        </label>
                    </div>)
                }
            </div>
        </div>
    }

    get renderBlocks() {
        throw new Error('`get renderBlocks` should implemented')
    }
    get type() {
        throw new Error('`get type` should implemented')
    }

    get requiredFields() {
        return []
    }

    render() {

        return(
            <div className={'button-config'}>

                {
                    this.renderBlocks.map((block) => <Fragment key={block}>{this[`render${block}`]()}</Fragment>)
                }

                {
                    this.renderActions()
                }

            </div>
        )
    }
}