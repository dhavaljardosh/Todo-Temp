import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import AssignmentRoundedIcon from "@material-ui/icons/AssignmentRounded";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginTop: 20,
    marginLeft: 60,
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
    fontSize: 30,
    color: "black",
  },
  button: {
    background: "linear-gradient(45deg, #f55679 30%, #f8752f 90%)",
    border: "2px solid brown",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: "16px",
  },
  btn: {
    background: "linear-gradient(45deg, #8A2BE2 30%, #BA55D3 90%)",
    border: "2px solid brown",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 20px",
    fontWeight: "bold",
    marginTop: 20,
    fontSize: "16px",
  },
});

export default function TodoInput(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <div className={classes.root}>
      <form onSubmit={props.handleSubmit} className={classes.margin}>
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield1"
          label="Add a New Task"
          value={props.item}
          onChange={props.handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentRoundedIcon />
              </InputAdornment>
            ),
          }}
          required
        />
        <TextField
          className={classes.margin}
          id="input-with-icon-textfield"
          label="Enter Details..."
          value={props.detail}
          onChange={props.handleDetails}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <FormatListNumberedRoundedIcon />
              </InputAdornment>
            ),
          }}
        />
        <br></br>&emsp;&emsp;
        <Button
          className={props.editItem ? classes.btn : classes.button}
          type="submit"
        >
          {props.editItem ? "Edit Item" : "Add Item"}
        </Button>
      </form>
    </div>
  );
}
