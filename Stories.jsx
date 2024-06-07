import React, { useState, useEffect } from "react";

const Stories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stories, setStories] = useState([]);
  const API = "http://hn.algolia.com/api/v1/search?query=HTML";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setStories(data.hits);
    } catch (error) {
      console.log("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2>Welcome to my page</h2>
      <ul>
        {stories.map((story) => (
          <li key={story.objectID}>
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              {story.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Stories;
