import { List } from "components/List/List";
import { ListItem } from "components/ListItem/ListItem";
import { usersSelectors } from "features/users/redux/usersSelectors";
import { useSelector } from "react-redux";
import styles from "./UsersList.module.css";

export const UsersList = () => {
  const users = useSelector(usersSelectors.selectUsers);

  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Users</h3>
      <List emptyMessage="There is no users yet. Please add a user">
        {users.map((user) => (
          <ListItem key={user.id}>{user.username}</ListItem>
        ))}
      </List>
    </div>
  );
};
