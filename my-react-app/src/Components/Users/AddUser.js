import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../Button/Button";

const AddUser = () => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length == 0 || enteredAge.trim().length == 0){
      return;
    }
    if(enteredAge < 1 || enteredAge > 120){
      return;
    }
    console.log(enteredUserName + "\n" + enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label className="username">UserName</label>
        <input
          type="text"
          id="username"
          value={enteredUserName}
          onChange={userNameChangeHandler}
        />
        <label className="age">Age (Year)</label>
        <input
          type="number"
          id="age"
          value={enteredAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
      <UsersList/>
    </Card>
  );
};

export default AddUser;
