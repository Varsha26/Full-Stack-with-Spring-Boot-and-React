import React, {Component} from 'react'
import AuthenticationService from './AuthenticationService.js';
class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Test',
            password: '123456',
            hasLoginFailed: false,
            showSuccessMasg: false
        }
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this);
        // this.userNameChange = this.userNameChange.bind(this);
        // this.passwordChange = this.passwordChange.bind(this);
    }
    handleChange(event) {
        console.log(this.state);
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    login() {
        if (this.state.username === 'Test' && this.state.password === '123456') {
            AuthenticationService.registerSuccessfullLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({ showSuccessMasg: true });
            // this.setState({ hasLoginFailed: false });
        } else {
            this.setState({ showSuccessMasg: false });
            this.setState({ hasLoginFailed: true });
        }
    }
    // userNameChange(event) {
    //     this.setState({
    //         username: event.target.value
    //     })
    //     console.log(event);
    // }
    // passwordChange(event) {
    //     this.setState({
    //         password: event.target.value
    //     })
    //     console.log(event);
    // }
    render() {
        return (
            <>
            <h1>Login</h1>
            <div className="container">
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {/* <ShowSuccesMasg loginSuccess={this.state.showSuccessMasg} /> */}
                {this.state.showSuccessMasg && <div>Login Seccessful</div>}
                User Name: <input type="text"
                    name="username"
                    onChange={this.handleChange}
                    value={this.state.username} />
                Password: <input type="password"
                    value={this.state.password}
                    name="password"
                    onChange={this.handleChange} />

                <button className="btn btn-success" onClick={this.login}>Login</button>
            </div>

            </>
        )
    }
}

export default LoginComponent;