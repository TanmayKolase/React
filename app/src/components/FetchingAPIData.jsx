import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingAPIData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {data.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </>
  );
};

export default FetchingAPIData;
