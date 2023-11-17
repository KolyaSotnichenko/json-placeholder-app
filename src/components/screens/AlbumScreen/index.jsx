import { useLoaderData } from "react-router-dom";
import styles from "./album-screen.module.css";
import { Helmet } from "react-helmet-async";

const AlbumScreen = () => {
  const albumData = useLoaderData();

  if (!albumData.length === 0) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{albumData[0].title}</title>
        <meta name="description" content="Details of the album" />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>{albumData[0].title}</h1>
          <p>{albumData[0].body}</p>
        </div>
      </div>
    </>
  );
};

export default AlbumScreen;
