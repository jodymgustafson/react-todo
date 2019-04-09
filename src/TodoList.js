import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div className="todo-list">
                {this.props.items.length === 0 &&
                    <p>Your todo list is empty</p>
                }
                {this.props.items.map(task => 
                    <TodoItem key={task.id} item={task} onDelete={this.deleteItem}></TodoItem>
                )}
            </div>
        );
    }

    deleteItem(id) {
        this.props.onDelete(id);
    }

    formatDate(created)
    {
        return created.toLocaleDateString();
    }
}

export default TodoList;