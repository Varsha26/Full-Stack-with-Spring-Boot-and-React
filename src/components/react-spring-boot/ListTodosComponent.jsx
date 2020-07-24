import React, {Component} from 'react'
class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todo: [
                { id: 1, description: 'Learn React', done: false, targerDate: new Date() },
                { id: 2, description: 'Learn Angular', done: false, targerDate: new Date() },
                { id: 3, description: 'Learn Vue', done: false, targerDate: new Date() },
                { id: 4, description: 'Learn Java Script', done: false, targerDate: new Date() },
                { id: 5, description: 'Learn Type Script', done: false, targerDate: new Date() }
            ]
        };
    }
    render() {
        return (
            <div>
                <h1>
                    List To Dos
                </h1>
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Description</th>
                            <th>Taget Date</th>
                            <th>Is Completed?</th>
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
                                        <td>{todo.targerDate.toString()}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>
                </div>
              
            </div>
        )
    }
}


export default ListTodosComponent;