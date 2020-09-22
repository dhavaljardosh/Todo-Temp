import React, { Component } from "react";
import TodoItem from "./TodoItem";
import "../App.css";

export default class TodoList extends Component {
  render() {
    const {
      items,
      completed,
      details,
      handleChecked,
      clearList,
      handleDelete,
      handleEdit,
      filter,
    } = this.props;

    return (
      <ul>
        <div className="todo-details"></div>
        <div className="todo-item">
          {items
            .filter((item) => {
              if (filter === 1 && item.completed) {
                console.log(filter, item.completed);
                return true;
              }
              if (filter === 2 && !item.completed) {
                console.log(filter, item.completed);
                return true;
              }
              if (filter === 0) {
                console.log(filter, item.completed);
                return true;
              }
              return false;
            })
            .map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  title={item.title}
                  details={item.details}
                  handleDelete={() => handleDelete(item.id)}
                  handleEdit={() => handleEdit(item.id)}
                  handleChecked={() => handleChecked(item.id)}
                  completed={item.completed}
                />
              );
            })}
        </div>
        <br></br>
        <br></br>
        <button className="button" onClick={clearList}>
          CLEAR LIST
        </button>
      </ul>
    );
  }
}
