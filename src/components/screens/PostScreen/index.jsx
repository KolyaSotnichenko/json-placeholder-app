import { useLoaderData } from "react-router-dom";
import styles from "./post-screen.module.css";
import { Helmet } from "react-helmet-async";

const PostScreen = () => {
  const postData = useLoaderData();

  if (!postData.length === 0) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{postData[0].title}</title>
        <meta name="description" content="Details of the post" />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{postData[0]?.title}</h1>
          <p>{postData[0]?.body}</p>
        </div>
      </div>
    </>
  );
};

export default PostScreen;
