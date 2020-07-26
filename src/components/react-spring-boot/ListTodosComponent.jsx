import React, {Component} from 'react'
import TodoListService from "../../api/todo/TodoListService.js"
import AuthenticationService from './AuthenticationService.js';
import moment from "moment";
class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: [
                // { id: 1, description: 'Learn React', done: false, targerDate: new Date() },
                // { id: 2, description: 'Learn Angular', done: false, targerDate: new Date() },
                // { id: 3, description: 'Learn Vue', done: false, targerDate: new Date() },
                // { id: 4, description: 'Learn Java Script', done: false, targerDate: new Date() },
                // { id: 5, description: 'Learn Type Script', done: false, targerDate: new Date() }
            ],
            message: null
        };

        this.deleteTodoByID = this.deleteTodoByID.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.updateTodoByID = this.updateTodoByID.bind(this);
        this.addNewTodo = this.addNewTodo.bind(this);
    }
    componentDidMount(){
       this.refreshTodos();
    }
    deleteTodoByID(id){
        let username = AuthenticationService.getUsername();
        TodoListService.deleteTodo(username, id)
        .then(
            response =>{
                this.setState({
                    message: `Delete of todo ${id} is Successful`
                })
                this.refreshTodos();
            }
        )
    }
    addNewTodo() {
        this.props.history.push(`/todo/-1`);
    }
    updateTodoByID(id) {
        this.props.history.push(`/todo/${id}`);
    }
    refreshTodos() {
        let username = AuthenticationService.getUsername();
        TodoListService.retrieveTodiList(username)
        .then(
            response =>{
                this.setState({
                    todo: response.data
                })
            }
        )
    }
    render() {
        return (
            <div>
                <h1>
                    List To Dos
                </h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Taget Date</th>
                            <th>Is Completed?</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todo.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                        <td><button onClick={()=> this.updateTodoByID(todo.id)} className="btn btn-success">Update</button></td>
                                        <td><button onClick={()=> this.deleteTodoByID(todo.id)} className="btn btn-warning">Delete</button></td>
                                        
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
                <div className="row">
                        <button onClick={()=> this.addNewTodo()} className="btn btn-success">Add New Todo</button>
                </div>
                </div>
              
            </div>
        )
    }
}


export default ListTodosComponent;