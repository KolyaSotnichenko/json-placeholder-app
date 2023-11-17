import { useLoaderData } from "react-router-dom";
import styles from "./user-details.module.css";
import { Helmet } from "react-helmet-async";
import { useGetPosts } from "../../../hooks/useGetPosts";
import { useState } from "react";
import { useGetAlbums } from "../../../hooks/useGetAlbums";

const UserDetails = () => {
  const [toggleInfo, setToggleInfo] = useState("posts");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState('asc');

  const userData = useLoaderData();
  const { postsData } = useGetPosts(userData.id);
  const { albumsData } = useGetAlbums(userData.id);

  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const filteredAlbums = albumsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  ).sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  const handleSearchPostChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchAlbumChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  if (!userData) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{userData.name}</title>
        <meta name="description" content="Details of the user" />
      </Helmet>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
          <div className={styles.buttons}>
            <button onClick={() => setToggleInfo("posts")}>Posts</button>
            <button onClick={() => setToggleInfo("albums")}>Albums</button>
          </div>
          {toggleInfo === "posts" && (
            <>
              <input
                type="text"
                placeholder="Search post"
                value={searchTerm}
                onChange={handleSearchPostChange}
              />
              <button onClick={toggleSortOrder}>
        {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
      </button>
              <ul style={{ textAlign: "left" }}>
                {filteredPosts.map((post) => (
                  <li className={styles.card} key={post.id}>
                    <a href={`/user/${userData.id}/post/${post.id}`}>
                      {post.title}
                    </a>
                  </li>
                ))}
              </ul>
              <h2>Posts</h2>
            </>
          )}
          {toggleInfo === "albums" && (
            <>
              <input
                type="text"
                placeholder="Search album"
                value={searchTerm}
                onChange={handleSearchAlbumChange}
              />
              <button onClick={toggleSortOrder}>
        {sortOrder === 'asc' ? 'Sort Descending' : 'Sort Ascending'}
      </button>
              <ul style={{ textAlign: "left" }}>
                {filteredAlbums.map((album) => (
                  <li className={styles.card} key={album.id}>
                    <a href={`/user/${userData.id}/album/${album.id}`}>
                      {album.title}
                    </a>
                  </li>
                ))}
              </ul>
              <h2>Albums</h2>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default UserDetails;
