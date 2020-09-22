import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

export default class App extends Component {
  state = {
    items: [],
    id: Math.floor(Math.random() * 100),
    item: "",
    editItem: false,
    detail: "",
    details: [],
    detailId: Date.now(),
    filter: 0, // 0 = All, 1 = completed , 2 = active
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleDetails = (e) => {
    this.setState({
      detail: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
      completed: false,
      details: this.state.detail,
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      detail: "",
      id: Math.floor(Math.random() * 100),
      editItem: false,
      completed: false,
    });
  };

  clearList = () => {
    this.setState({
      items: [],
      details: [],
    });
  };

  handleDelete = (id) => {
    const newArray = this.state.items.filter((item) => item.id != id);
    this.setState({
      items: newArray,
    });
  };

  handleEdit = (id) => {
    console.log(id);
    const newArray = this.state.items.filter((item) => item.id != id);
    const selectedItem = this.state.items.find((item) => item.id === id);

    this.setState({
      items: newArray,
      item: selectedItem.title,
      editItem: true,
      id: id,
    });
  };

  handleChecked = (id) => {
    let myItems = this.state.items;
    myItems = myItems.map((todo) => {
      if (todo.id == id) {
        todo.completed = true;
      }
      return todo;
    });
    this.setState({
      items: myItems,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>To-do List</h1>
        <div className="todo-input">
          <TodoInput
            item={this.state.item}
            detail={this.state.detail}
            handleChange={this.handleChange}
            handleDetails={this.handleDetails}
            handleSubmit={this.handleSubmit}
            editItem={this.state.editItem}
          />
        </div>
        <div className="todo-list">
          <button onClick={() => this.setState({ filter: 0 })}>All</button>
          <button onClick={() => this.setState({ filter: 1 })}>
            Completed
          </button>
          <button onClick={() => this.setState({ filter: 2 })}>Active</button>
          <TodoList
            filter={this.state.filter}
            items={this.state.items}
            details={this.state.details}
            clearList={this.clearList}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            handleChecked={this.handleChecked}
            completed={this.props.completed}
          />
        </div>
      </div>
    );
  }
}
