import React, {Fragment} from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import TimePicker from 'react-times';
import {cloneDeep, find, uniqueId, remove} from "lodash";
import Modal from 'react-modal';
import axios from 'axios';
import CreatableSelect from 'react-select/lib/Creatable';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#app');


const DEFAULT_WORK_DAY = {
    work: false,
    dinner: false,
    workFrom: "09:00",
    workTo: "18:00",
    dinnerFrom: "13:00",
    dinnerTo: "14:00",

};

class DatePickerInput extends React.Component {
    render () {
        return (
            <button
                className="btn btn-primary text-uppercase"
                onClick={this.props.onClick}>
                Move to another day
            </button>
        )
    }
}


export default class Calendar extends React.Component {

    state = {
        id: '',
        name: '',
        emails: [],
        default_event_name: '',
        default_minutes_for_event: 60,
        activeDay: null,
        workingHour: days.map(() => (cloneDeep(DEFAULT_WORK_DAY))),
        specialActive: false,
        special: false,
        activeEvent: null,
        eventFrom: null,
        eventTo: null,
        eventClientName: '',
        eventName: '',
        eventEmail: '',
        eventPhone: '',
        eventComment: '',
        eventConfirmVisitor: false,
        eventAlreadyConfirmed: false,
        events: [],
        excludedWorkDays: {},
        excludedDayOff: {},
    };

    getSpecialSchedule(value) {
        const day = moment(value);
        let specialActive = this.isDayWorking(value);
        if (this.state.excludedDayOff[day.format('YYYYMMDD')]) {
            const hours = this.state.excludedDayOff[day.format('YYYYMMDD')];
            return {
                specialWorkFrom: hours.workFrom,
                specialWorkTo: hours.workTo,
                specialDinnerFrom: hours.dinnerFrom,
                specialDinnerTo: hours.dinnerTo,
                specialActive
            };
        }
        if (this.state.excludedWorkDays[day.format('YYYYMMDD')]) {
            const hours = this.state.excludedWorkDays[day.format('YYYYMMDD')];
            return {
                specialWorkFrom: hours.workFrom,
                specialWorkTo: hours.workTo,
                specialDinnerFrom: hours.dinnerFrom,
                specialDinnerTo: hours.dinnerTo,
                specialActive
            };
        }
        if(this.state.workingHour[day.day()].work) {
            const hours = this.state.workingHour[day.day()];
            return {
                specialWorkFrom: hours.workFrom,
                specialWorkTo: hours.workTo,
                specialDinnerFrom: hours.dinnerFrom,
                specialDinnerTo: hours.dinnerTo,
                specialActive
            }
        }
         return {
                specialWorkFrom: "09:00",
                specialWorkTo: "18:00",
                specialDinnerFrom: "13:00",
                specialDinnerTo: "14:00",
                specialActive
            }

    }

    constructor() {
        super(...arguments);
        if (this.props.calendar) {
            let calendar = JSON.parse(this.props.calendar);
            this.state.name = calendar.name;
            this.state.default_event_name = calendar.default_event_name;
            this.state.default_minutes_for_event = calendar.default_minutes_for_event;
            this.state.id = calendar.id;
            this.state.emails = calendar.emails.map((event) => ({value: event.email, label: event.email, selected: true}));
            this.state.workingHour = calendar.working_hours.map((hours) => ({
                work: hours.working,
                dinner: false,
                workFrom: hours.work_from,
                workTo: hours.work_to,
                dinnerFrom: hours.dinner_from,
                dinnerTo: hours.dinner_to,
            }));
            days.map((day, i) => {
                if(!this.state.workingHour[i]) {
                    this.state.workingHour[i] = cloneDeep(DEFAULT_WORK_DAY);
                }
            });
            calendar.working_hours_excluded_work_days.map((hour) => {
                const day = moment(hour.day);
               this.state.excludedWorkDays[day.format('YYYYMMDD')] = {
                   workFrom: hour.work_from,
                   workTo: hour.work_to,
                   dinnerFrom: hour.dinner_from,
                   dinnerTo: hour.dinner_to,
               }
            });
            calendar.working_hours_excluded_day_off.map((hour) => {
                const day = moment(hour.day);
               this.state.excludedDayOff[day.format('YYYYMMDD')] = {
                   workFrom: hour.work_from,
                   workTo: hour.work_to,
                   dinnerFrom: hour.dinner_from,
                   dinnerTo: hour.dinner_to,
               }
            });
            this.state.events = calendar.events.map(({start_time, end_time, ...event}) => {
                event.start = moment.utc(start_time).toDate();
                event.end = moment.utc(end_time).toDate();
                return event
            })
        }

        this.modifyActiveDay = this.modifyActiveDay.bind(this);
        this.saveEvent = this.saveEvent.bind(this);
        this.save = this.save.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.changeActiveDay = this.changeActiveDay.bind(this);
    }

    saveEvent() {
        //validation =))
        if ([
                this.state.eventPhone,
                this.state.eventEmail,
                this.state.eventClientName,
                this.state.eventName,
            ].indexOf('') !== -1) {
            return;
        }
        let events = cloneDeep(this.state.events);
        let event;
        if (this.state.activeEvent) {
            event = find(events, {id: this.state.activeEvent})
        } else {
            event = {id: uniqueId('new-event')};
            events.push(event);
        }
        let activeDay = moment(this.state.activeDay);
        let [startHours, startMinutes] = this.state.eventFrom.split(':');
        let [endHours, endMinutes] = this.state.eventTo.split(':');
        event.start = activeDay.hours(startHours).minutes(startMinutes).toDate();
        event.end = activeDay.hours(endHours).minutes(endMinutes).toDate();
        event.comment = this.state.eventComment;
        event.user_phone = this.state.eventPhone;
        event.user_email = this.state.eventEmail;
        event.user_name = this.state.eventClientName;
        event.name = this.state.eventName;
        event.should_confirm = this.state.eventConfirmVisitor;
        this.setState({
            events,
            activeDay: false,
            activeEvent: null,
            eventFrom: null,
            eventTo: null,
            eventClientName: '',
            eventName: '',
            eventEmail: '',
            eventPhone: '',
            eventComment: '',
            eventConfirmVisitor: false,
            eventAlreadyConfirmed: false,
        })
    }

    static defaultProps = {};

    save() {
        axios({
            method: this.state.id ? 'patch' : 'post',
            url: `/calendar/${this.state.id}`,
            data: this.state
        }).then(() => window.location.href = '/calendar')
    }

    deleteEvent() {
        let events = cloneDeep(this.state.events);
        remove(events, {id: this.state.activeEvent});
        this.setState({
            events,
            activeDay: false,
            activeEvent: null,
            eventFrom: null,
            eventTo: null,
            eventClientName: '',
            eventName: '',
            eventEmail: '',
            eventPhone: '',
            eventComment: '',
            eventConfirmVisitor: false,
            eventAlreadyConfirmed: false,
        })
    }

    changeWorkTime(index, type) {
        return (e) => {
            let workingHour = cloneDeep(this.state.workingHour);
            workingHour[index][type] = e.hour + ':' + e.minute;
            this.setState({workingHour});
        }
    }

    changeWork(day) {
        let workingHour = cloneDeep(this.state.workingHour);
        workingHour[day].work = !workingHour[day].work;
        this.setState({workingHour});
    }

    modifyActiveDay() {
        const day = moment(this.state.activeDay);
        let excludedWorkDays = cloneDeep(this.state.excludedWorkDays);
        let excludedDayOff = cloneDeep(this.state.excludedDayOff);

        let isDayWorking = this.state.specialActive;
        let isInWorking = this.state.workingHour[day.get('day')].work;

        excludedWorkDays[day.format('YYYYMMDD')] = null;
        excludedDayOff[day.format('YYYYMMDD')] = null;
        const dayData = {
            workFrom: this.state.specialWorkFrom,
            workTo: this.state.specialWorkTo,
            dinnerFrom: this.state.specialDinnerFrom,
            dinnerTo: this.state.specialDinnerTo,
        };
        if (isDayWorking) {

            excludedWorkDays[day.format('YYYYMMDD')] = dayData;

        } else {
            excludedDayOff[day.format('YYYYMMDD')] = dayData;
        }

        this.setState({excludedWorkDays, excludedDayOff, activeDay: null});

    }

    toggleConfirm() {
        this.setState({
            eventConfirmVisitor: !this.state.eventConfirmVisitor,
        });
    };

    isDayWorking(value) {
        const day = moment(value);
        if (this.state.excludedDayOff[day.format('YYYYMMDD')]) {
            return false;
        }
        if (this.state.excludedWorkDays[day.format('YYYYMMDD')]) {
            return true;
        }

        return this.state.workingHour[day.get('day')].work

    }

    changeActiveDay(date) {
        this.setState({
            activeDay: date
        });
    }

    render() {
        return (<div className={'card'}>
                <Modal
                    isOpen={!!this.state.activeDay}
                    onAfterOpen={() => {
                    }}
                    onRequestClose={() => {
                        this.setState({activeDay: null})
                    }}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button className="btn btn-link p-1 pull-right" style={{minWidth: 'auto'}} onClick={() => {
                        this.setState({activeDay: null})
                    }}><span className="mi mi-close"></span>
                    </button>
                    {this.state.activeDay && (
                        this.state.special ?
                            <div style={{width: 600}}>
                                <h3>{moment(this.state.activeDay).format('DD/MM/YYYY')}</h3>

                                <div className="custom-control custom-checkbox">
                                    <input
                                        value={false}
                                        checked={this.state.specialActive}
                                        onChange={() => this.setState({specialActive: !this.state.specialActive})}
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={`work-day-edit`}
                                    />

                                    <label className="custom-control-label" htmlFor={`work-day-edit`}>
                                        Working day
                                    </label>
                                    {this.state.specialActive ?
                                        <Fragment>
                                            <div className={'row'}>
                                                <div className="col-sm-6">
                                                    Work from
                                                    <TimePicker
                                                        onTimeChange={({hour, minute}) => this.setState({specialWorkFrom: hour + ":" + minute})}
                                                        time={this.state.specialWorkFrom} // initial time, default current time
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    Work to
                                                    <TimePicker
                                                        onTimeChange={({hour, minute}) => this.setState({specialWorkTo: hour + ":" + minute})}
                                                        time={this.state.specialWorkTo} // initial time, default current time
                                                    />
                                                </div>
                                            </div>
                                            <div className={'row'}>
                                                <div className="col-sm-6">
                                                    Lunch from
                                                    <TimePicker
                                                        onTimeChange={({hour, minute}) => this.setState({specialDinnerFrom: hour + ":" + minute})}
                                                        time={this.state.specialDinnerFrom} // initial time, default current time
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    Lunch to
                                                    <TimePicker
                                                        onTimeChange={({hour, minute}) => this.setState({specialDinnerTo: hour + ":" + minute})}
                                                        time={this.state.specialDinnerTo} // initial time, default current time
                                                    />
                                                </div>

                                            </div>


                                        </Fragment> : null
                                    }
                                    <div className="row">
                                        <div className="col-sm-12 bottom-btn">
                                            <button onClick={this.modifyActiveDay}
                                                    className="btn btn-primary pull-right text-uppercase">Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            <div>
                                <div style={{width: 600}}>
                                    <h3>{moment(this.state.activeDay).format('DD/MM/YYYY ')}
                                        <a onClick={() => this.setState({special: true})}> Click to set special
                                            schedule</a></h3>
                                    <div className="d-flex align-items-center mt-2 mb-3">
                                        <h4 className="d-inline-block m-0">Create event</h4>
                                        <div className="d-inline-block ml-4">
                                            <DatePicker
                                                customInput={<DatePickerInput/>}
                                                selected={this.state.activeDay}
                                                onChange={this.changeActiveDay}
                                                dateFormat="dd/MM/yyyy"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row my-2">
                                            <div className="col-sm-6">
                                                <div className="pull-left">From</div>
                                                <TimePicker
                                                    onTimeChange={({hour, minute}) => this.setState({eventFrom: hour + ":" + minute})}
                                                    time={this.state.eventFrom} // initial time, default current time
                                                />
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="pull-left">To</div>
                                                <TimePicker
                                                    onTimeChange={({hour, minute}) => this.setState({eventTo: hour + ":" + minute})}
                                                    time={this.state.eventTo} // initial time, default current time
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input

                                                placeholder="Event name"
                                                type="text"
                                                name="eventName"
                                                value={this.state.eventName}
                                                onChange={(e) => this.setState({eventName: e.target.value})}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Client name</label>
                                            <input

                                                placeholder="Client name"
                                                type="text"
                                                name="clientname"
                                                value={this.state.eventClientName}
                                                onChange={(e) => this.setState({eventClientName: e.target.value})}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>User email</label>
                                            <input

                                                placeholder="User email"
                                                type="text"
                                                name="eventEmail"
                                                value={this.state.eventEmail}
                                                onChange={(e) => this.setState({eventEmail: e.target.value})}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>User phone</label>
                                            <input

                                                placeholder="User phone"
                                                type="text"
                                                name="eventPhone"
                                                value={this.state.eventPhone}
                                                onChange={(e) => this.setState({eventPhone: e.target.value})}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Comment</label>
                                            <input

                                                placeholder="Comment"
                                                type="text"
                                                name="eventComment"
                                                value={this.state.eventComment}
                                                onChange={(e) => this.setState({eventComment: e.target.value})}
                                                className="form-control"
                                            />
                                        </div>
                                        <div className="form-group">
                                            {this.state.eventAlreadyConfirmed ? <div className="">This user is confirmed</div>:
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    name="eventConfirmVisitor"
                                                    id="eventConfirmVisitor"
                                                    checked={this.state.eventConfirmVisitor}
                                                    onChange={() => this.toggleConfirm()}
                                                />
                                                <label className="custom-control-label" htmlFor="eventConfirmVisitor">Confirm to visitor</label>
                                            </div>}

                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 bottom-btn">
                                                <button
                                                    onClick={this.deleteEvent}
                                                    className="btn btn-primary pull-left text-uppercase"
                                                >
                                                    Delete
                                                </button>
                                                <button onClick={this.saveEvent}
                                                        className="btn btn-primary pull-right text-uppercase"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </Modal>
                <div className="card-body">

                    <div className="form-group">
                        <label>Name</label>
                        <input

                            placeholder="Name"
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={(e) => this.setState({name: e.target.value})}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Name of this calendar based event? (such as "Call me back" or appointment)</label>
                        <input

                            placeholder='Name of this calendar based event? (such as "Call me back" or appointment)'
                            type="text"
                            name="default_event_name"
                            value={this.state.default_event_name}
                            onChange={(e) => this.setState({default_event_name: e.target.value})}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>How long will this event last? Enter a default value for online queuing (minutes)</label>
                        <input

                            placeholder="How long will this event last? Enter a default value for online queuing (minutes)"
                            type="text"
                            name="default_minutes_for_event"
                            value={this.state.default_minutes_for_event}
                            onChange={(e) => this.setState({default_minutes_for_event: e.target.value})}
                            className="form-control"
                        />

                    </div>
                    <div className="form-group">
                        <label>Please enter your email address where we send the notification of new calendar booking</label>
                        <CreatableSelect
                            isClearable
                            isMulti
                            delimiter={','}
                            onChange={(emails) => this.setState({emails})}
                            options={this.state.emails}
                            defaultValue={this.state.emails}
                        />

                    </div>
                    <div>
                        Working hours
                        <table className={'table stripped'} style={{width: "100%"}}>
                            <thead>
                            <tr>
                                <th style={{width: 200}}>Day</th>
                                <th className="text-center">Work from</th>
                                <th className="text-center">Work to</th>
                                <th className="text-center">Lunch from</th>
                                <th className="text-center">Lunch to</th>
                            </tr>
                            </thead>
                            <tbody>
                            {days.map((name, index) =>
                                <tr key={index}>
                                    <td>

                                        <div className="custom-control custom-checkbox">
                                            <input
                                                value={false}
                                                checked={this.state.workingHour[index].work}
                                                onChange={() => this.changeWork(index)}
                                                type="checkbox"
                                                className="custom-control-input"
                                                id={`work-day-${index}`}
                                            />

                                            <label className="custom-control-label" htmlFor={`work-day-${index}`}>
                                                {name}
                                            </label>
                                        </div>
                                    </td>
                                    {this.state.workingHour[index].work ?
                                        <Fragment>
                                            <td>
                                                <div className="time-wrapper">
                                                    <TimePicker
                                                        onTimeChange={this.changeWorkTime(index, 'workFrom')}
                                                        time={this.state.workingHour[index]['workFrom']}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="time-wrapper">
                                                    <TimePicker
                                                        onTimeChange={this.changeWorkTime(index, 'workTo')}
                                                        time={this.state.workingHour[index]['workTo']}
                                                    />
                                                </div>
                                            </td>

                                            <td>
                                                <div className="time-wrapper">
                                                    <TimePicker
                                                        onTimeChange={this.changeWorkTime(index, 'dinnerFrom')}
                                                        time={this.state.workingHour[index]['dinnerFrom']}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="time-wrapper">
                                                    <TimePicker
                                                        onTimeChange={this.changeWorkTime(index, 'dinnerTo')}
                                                        time={this.state.workingHour[index]['dinnerTo']}
                                                    />
                                                </div>
                                            </td>
                                        </Fragment> :
                                        <td className={'text-center'} colSpan={4}>
                                            Day off
                                        </td>
                                    }
                                </tr>
                            )}
                            </tbody>
                        </table>
                    </div>
                    <div style={{height: 700}}>
                        <BigCalendar
                            views={['month', 'day']}
                            dayPropGetter={(a) => {
                                return {className: this.isDayWorking(a) ? 'working' : 'holiday'};
                            }}
                            selectable={true}
                            onSelectSlot={(day) => this.setState({
                                activeDay: day.start,
                                special: false,
                                eventFrom: moment(day.start).format('HH:mm'),
                                eventTo: moment(day.end).format('HH:mm'),
                                eventName: '',
                                eventClientName: '',
                                eventPhone: '',
                                eventEmail: '',
                                activeEvent: null,
                                eventComment: '',
                                eventConfirmVisitor: false,
                                eventAlreadyConfirmed: false,
                                ...this.getSpecialSchedule(day.start)
                            })}
                            localizer={localizer}
                            onSelectEvent={({resource}) => {
                                let event = find(this.state.events, {id: resource});
                                this.setState({
                                    activeDay: event.start,
                                    special: false,
                                    eventFrom: moment(event.start).format('HH:mm'),
                                    eventTo: moment(event.end).format('HH:mm'),
                                    eventName: event.name,
                                    eventClientName: event.user_name,
                                    eventPhone: event.user_phone,
                                    eventEmail: event.user_email,
                                    activeEvent: event.id,
                                    eventComment: event.comment,
                                    eventAlreadyConfirmed: event.confirm_visitor,
                                    eventConfirmVisitor: event.should_confirm || false,
                                    ...this.getSpecialSchedule(event.start)
                                })
                            }}
                            events={
                                this.state.events.map(({name, start, end, id}) => ({
                                    start,
                                    end,
                                    title: name,
                                    resource: id
                                }))
                            }
                            startAccessor="start"
                            endAccessor="end"
                        />
                    </div>

                    <div className="row">
                        <div className="col-sm-12 bottom-btn">
                            <button onClick={this.save} className="btn btn-primary pull-right text-uppercase">Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}