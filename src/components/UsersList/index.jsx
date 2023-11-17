import React from "react";
import { useGetUsers } from "../../hooks/useGetUsers";
import styles from "./user-list.module.css";

const UsersList = () => {
  const { usersData } = useGetUsers();

  return (
    <>
      <ul>
        {usersData.map((user) => (
          <li className={styles.card} key={user.id}>
            <a href={`/user/${user.id}`}>{user.name}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersList;
