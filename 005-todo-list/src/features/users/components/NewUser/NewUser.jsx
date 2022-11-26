import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { usersActions } from "features/users/redux/usersSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./NewUser.module.css";

export const NewUser = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const dispatch = useDispatch();
  const handleAddClick = () => {
    if (!username) {
      return;
    }

    dispatch(usersActions.addUser(username));
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Add user</h3>
      <Input
        id="username"
        label="Username"
        value={username}
        onChange={handleUsernameChange}
      />
      <Button onClick={handleAddClick}>Add</Button>
    </div>
  );
};
