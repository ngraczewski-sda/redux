// import styles from "./UsersList.module.css";

import { usersSelectors } from "features/users/redux/usersSelectors";
import { useSelector } from "react-redux";

export const UsersList = () => {
  const users = useSelector(usersSelectors.selectUsers);
  const activeUserId = useSelector(usersSelectors.selectActiveUserId);

  console.log({ users, activeUserId });
  return (
    <div
    // className={styles.container}
    >
      {/* <h3 className={styles.header}>Users</h3> */}
    </div>
  );
};
