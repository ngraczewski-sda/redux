import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import { useState } from "react";
import styles from "./NewUser.module.css";

export const NewUser = () => {
  const [username, setUsername] = useState("");

  const handleUsernameChange = (e) => {
    const newUsername = e.target.value;
    setUsername(newUsername);
  };

  const handleAddClick = () => {
    if (!username) {
      return;
    }

    alert(username);
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
