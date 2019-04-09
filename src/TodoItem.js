import React, { Component } from 'react';

class TodoItem extends Component {
    constructor(props) {
        super(props);

        this.deleteItem = this.deleteItem.bind(this);
    }

    render() {
        return (
            <div className="todo-item">
                <button onClick={this.deleteItem} title="Delete"><span role="img" aria-label="delete">&#x274C;</span></button>
                <span>{this.props.item.name}</span>
                <span className="created">(created {this.formatDate(this.props.item.created)})</span>
            </div>
        );
    }

    deleteItem() {
        this.props.onDelete(this.props.item.id);
    }

    formatDate(created)
    {
        return created.toLocaleDateString();
    }
}

export default TodoItem;