import React from "react";
import UsersList from "../../UsersList";
import styles from "./home-screen.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.container}>
      <UsersList />
    </div>
  );
};

export default HomeScreen;
