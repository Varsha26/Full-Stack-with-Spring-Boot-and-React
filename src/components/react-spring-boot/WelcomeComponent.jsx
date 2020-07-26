import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from "../../api/todo/HelloWorldService.js"

class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.welcomeMessage = this.welcomeMessage.bind(this);
        this.showSuccessMasg = this.showSuccessMasg.bind(this);
        this.state = {
            successMasg: ''
        }
    }
    render() {
        return (
            <>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome!!! {this.props.match.params.name} You can manage your todos <Link to="/listtodo">here</Link>
            </div>
            <div className="container">
               Click here to get some customized text. 
               <button onClick={this.welcomeMessage} className="btn btn-success">Get Welcome Message</button>
            </div>
            <div className="container">
               {this.state.successMasg}
            </div>
            </>


        )
        
    }

    welcomeMessage() {
        // HelloWorldService.executeHelloWorldService()
        // .then((response)=> {
        //     this.showSuccessMasg(response);
        // })
        
        // HelloWorldService.executeHelloWorldBeanService()
        // .then((response)=> {
        //     this.showSuccessMasg(response);
        // })

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then((response)=> {
            this.showSuccessMasg(response);
        })
    }
 

    showSuccessMasg(response) {
        console.log(response);
        this.setState({successMasg: response.data.message})
    }
}
export default WelcomeComponent;