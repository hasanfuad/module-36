import React, { useEffect, useState } from "react";
import News from "../News/News";

const TopHeadlines = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=c2f2a7a4fabd4bb48e9f3d88af27c7f6"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h1>Top Headlines: {articles.length}</h1>
      {articles.map((article) => (
        <News article={article}></News>
      ))}
    </div>
  );
};

export default TopHeadlines;
