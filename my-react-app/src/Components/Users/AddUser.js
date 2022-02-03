import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../Button/Button";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
    console.log(enteredUserName)
  }

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
    console.log(enteredAge)
  }

  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label className="username">UserName</label>
        <input type="text" id="username" onChange={userNameChangeHandler}/>
        <label className="age">Age (Year)</label>
        <input type="number" id="age"onChange={userAgeChangeHandler}/>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
