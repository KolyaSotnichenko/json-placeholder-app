import { Helmet } from "react-helmet-async";
import styles from "./error-screen.module.css";

const ErrorScreen = () => {
  return (
    <>
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Error page" />
      </Helmet>
      <div className={styles.container}>
        <h1>Oops!</h1>
      </div>
    </>
  );
};

export default ErrorScreen;
