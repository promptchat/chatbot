import React from 'react';

const Error = ({errors}) => (errors ? <div className="help-block">{errors.map((error, key) => <div key={key} >{error}</div>)}</div> : null);

export default class Registration extends React.Component {
    state= {
        email: '',
        name: '',
        password: '',
        repeatPassword: '',
    };

    getData() {
        let state = this.state;
        return {

            email: state.email,
            name: state.name,
            password: state.password,
            password_confirmation: state.repeatPassword
        }
    }

    render() {
        return  (
            <div className="row">
                <div className="col-md-5">
                    <div className="form-group mr-4 mb-4">
                        <label htmlFor="email" className="sr-only">Email</label>
                        <input value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} type="email" className="form-control" id="email" placeholder="Email" />
                        <Error errors={this.props.errors.email}/>
                    </div>

                    <div className="form-group mr-4 mb-4">
                        <label htmlFor="name" className="sr-only">Username</label>
                        <input value={this.state.name} onChange={(event) => this.setState({name: event.target.value})} type="text" className="form-control" id="name" placeholder="Name" />
                        <Error errors={this.props.errors.name}/>
                    </div>

                    <div className="form-group mr-4 mb-4">
                        <label htmlFor="username" className="sr-only">Password</label>
                        <input value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} type="password" className="form-control" id="password" placeholder="Password" />
                        <Error errors={this.props.errors.password}/>
                    </div>

                    <div className="form-group mr-4 mb-4">
                        <label htmlFor="password-confirm" className="sr-only">Confirm password</label>
                        <input value={this.state.repeatPassword} onChange={(event) => this.setState({repeatPassword: event.target.value})} type="password" className="form-control" id="password-confirm" placeholder="Repeat password" />
                        <Error errors={this.props.errors.password_confirmation}/>
                    </div>
                </div>
            </div>
        )
    }
}
