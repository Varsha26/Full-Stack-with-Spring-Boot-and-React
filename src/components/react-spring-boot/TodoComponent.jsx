import React, { Component } from 'react'
import moment from "moment";
import {Formik,  Form, Field, ErrorMessage } from "formik";
import TodoListService from '../../api/todo/TodoListService.js';
import AuthenticationService from './AuthenticationService.js';
class TodoComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }
    componentDidMount(){
        if(this.state.id === -1) {
            return
        }
        let username = AuthenticationService.getUsername();
        TodoListService.retrieveTodo(username,this.state.id )
        .then(response => {
            this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            })
        });
    }
    onSubmit(values) {
        let username = AuthenticationService.getUsername();
        let todo= {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        };
        if(this.state.id === -1) {
            TodoListService.createTodo(username, todo).then(() => {
                this.props.history.push(`/listtodo`);
            })
        } else {
            TodoListService.updateTodo(username,this.state.id, todo).then(() => {
                this.props.history.push(`/listtodo`);
            })
        }
        
    }
    validate(values) {
        let errors= {};
        if(!values.description) {
            errors.description ="Enter a description";
        } else if(values.description.length < 5) {
            errors.description ="Enter atleast 5 characters";
        }
        if(!moment(values.targetDate).isValid()) {
            errors.targetDate ="Enter a valid target date";
        }
        return errors;
    }
    render() {
        let {description, targetDate} = this.state;
       //validationOnBlur= false validationOnChange = false
        return (
            <div>
                <h1>Todo  Details </h1>
    
                <div className="container">
                    <Formik initialValues={{
                        description,
                        targetDate
                        
                    }} onSubmit={this.onSubmit}
                    validate={this.validate}
                    enableReinitialize={true}>
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>
                                            Description
                                        </label>
                                        <Field className="form-control"
                                        type="text" name="description"
                                        />
                                    </fieldset>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>
                                            Target Date
                                        </label>
                                        <Field className="form-control"
                                        type="date" name="targetDate"/>
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>   
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
            
        )
    }
    
}

export default TodoComponent;
