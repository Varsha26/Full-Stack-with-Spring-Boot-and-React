import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx"
import HeaderComponent from "./HeaderComponent.jsx";
import FooterComponent from "./FooterComponent.jsx"; 
import LogoutComponent from  "./LogoutComponent.jsx";
import WelcomeComponent from "./WelcomeComponent.jsx";
import ErrorComponent from "./ErrorComponent.jsx";
import TodoComponent from './TodoComponent.jsx';
class WelcomePage extends Component {
    render() {
        return (
            <div className="WelcomePage">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/listtodo" exact component={ListTodosComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                            <AuthenticatedRoute path="/todo/:id" component={TodoComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
                {/* <LoginComponent />
                <WelcomeComponent /> */}
            </div>
        )
    }

}



// function ShowInvalidCredentials(props) {
//     if (props.hasLoginFailed) {
//         return <div>Invalid Credentials</div>
//     }
//     return null;
// }
// function ShowSuccesMasg(props) {
//     if (props.loginSuccess) {
//         return <div>Login Seccessful</div>
//     }
//     return null;
// }
export default WelcomePage;