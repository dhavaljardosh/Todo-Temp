import React, { Component } from "react";
import "../App.css";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import Box from "@material-ui/core/Box";
import { Checkbox } from "@material-ui/core";

export default class TodoInput extends Component {
  state = {
    showDetails: false,
  };
  render() {
    const {
      title,
      showDetail,
      completed,
      handleChecked,
      handleDelete,
      handleEdit,
      details,
    } = this.props;
    const display = () => {
      <div>{showDetail}</div>;
    };

    return (
      <li className="list-group-item">
        <div style={{ width: "85%" }}>
          <Box
            display="flex"
            p={1}
            className="list-item"
            style={{ backgroundColor: "rgb(205,133,63)" }}
          >
            <Box p={1} flexGrow={1} style={{ color: "whitesmoke" }}>
              <Checkbox checked={completed} onChange={handleChecked} />
              <div
                style={{
                  textDecoration: completed ? "line-through" : "",
                  display: "inline-block",
                }}
                onClick={handleChecked}
              >
                {title}
              </div>
            </Box>
            <Box p={1} mr={1}>
              <button
                style={{ width: "40%" }}
                className="button"
                onClick={() =>
                  this.setState({ showDetails: !this.state.showDetails })
                }
              >
                Show Details
              </button>
            </Box>
            <Box p={1}>
              <div className="todo-icon">
                <EditRoundedIcon
                  style={{ color: "darkgreen" }}
                  onClick={completed ? () => {} : handleEdit}
                />
                <DeleteRoundedIcon
                  style={{ color: "red" }}
                  onClick={handleDelete}
                />
              </div>
            </Box>
            {this.state.showDetails && <p>{details}</p>}
          </Box>
        </div>
      </li>
    );
  }
}
