import React, { Component } from 'react';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.state = {taskName: ""};

        this.taskNameKeyUp = this.taskNameKeyUp.bind(this);
        this.taskNameChanged = this.taskNameChanged.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    render() {
        return (
            <div>
                <input ref="taskName" type="text" placeholder="New Task Name" value={this.state.taskName}
                    onChange={this.taskNameChanged} onKeyUp={this.taskNameKeyUp} autoFocus/>
                <button onClick={this.addTask}>Add Task</button>
            </div>
        );
    }

    taskNameChanged(ev) {
        this.setState({taskName: ev.target.value});
    }

    taskNameKeyUp(ev)
    {
        let code = ev.which;
        if (code === 13)
        {
            this.addTask();
        }
    }

    addTask(ev)
    {
        console.log("adding task: " + this.state.taskName);
        if (this.state.taskName)
        {
            this.props.onAdd(this.state.taskName);
            this.setState({taskName: ""});
            this.refs.taskName.focus();
        }
    }
}

export default AddTask;