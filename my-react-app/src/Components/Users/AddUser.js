import React from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../Button/Button";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label className="username">UserName</label>
        <input type="text" id="username" />
        <label className="age">Age (Year)</label>
        <input type="number" id="age" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
