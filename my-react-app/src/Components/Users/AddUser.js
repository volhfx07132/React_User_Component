import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button/Button";
import classes from "./AddUser.module.css";
import ErrorModle from "../UI/ErrorModle";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errorPanel, setErrorPanel] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrorPanel({
        title: "Invalid input",
        message: "Please enter a valid username and age (non-empty values)."
      })
      return;
    }
    if (enteredAge < 1) {
      setErrorPanel({
        title: "Invalid age",
        message: "Please enter a valid a valid age (age > 0 and age < 120)!"
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setErrorPanel(null);
  }

  return (
    <div>
    {errorPanel && <ErrorModle title={errorPanel.title} message={errorPanel.message} onComfirm={errorHandler}/>}
      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
