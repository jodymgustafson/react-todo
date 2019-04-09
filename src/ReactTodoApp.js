import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './AddTaskComponent';
import TodoList from './TodoList';

class App extends Component {

    constructor(props)
    {
        super(props);
        this.state = {todoList: [], nextId: 1};

        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
    }

  render() {
    return (
        <div className="App">
            <h2>TODO List:<img src={logo} className="App-logo" alt="logo" />React Style</h2>
            <p>You have {this.state.todoList.length} tasks</p>
          
            <AddTask onAdd={this.addTask}></AddTask>
            <TodoList items={this.state.todoList} onDelete={this.removeTask}></TodoList>
        </div>
        );
    }

    addTask(taskName)
    {
        let newTask = {
            id: this.state.nextId.toString(),
            name: taskName,
            created: new Date()
        };

        this.setState({
            todoList: this.state.todoList.concat(newTask),
            nextId: this.state.nextId + 1}
        );

        console.log("added task", newTask);
    }

    removeTask(id)
    {
        let idx = this.state.todoList.findIndex(i => i.id === id);
        if (idx >= 0)
        {
            let newList = [...this.state.todoList];
            newList.splice(idx, 1);
            this.setState({todoList: newList});
        }
    }
}
  
  export default App;
  