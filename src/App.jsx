import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import NewsFeed from "./components/NewsFeed";
import NewsHeader from "./components/NewsHeader";

function App() {
  const [articles, setArticles] = useState([]);
  const loadArticles = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=eg&apiKey=${
        import.meta.env.VITE_NEWS_FEED_API_KEY
      }`
    );
    if (!response.ok) console.log("errrrrrrrrrrrrrrr");
    const data = await response.json();
    console.log(data);
    return data.articles.map((article) => {
      const { title, description, author, publishedAt, urlToImage } = article;
      return {
        title,
        description,
        author,
        publishedAt,
        image: urlToImage,
      };
    });
  };
  useEffect(() => {
    loadArticles().then(setArticles);
  }, []);
  return (
    <Container>
      <NewsHeader />
      <NewsFeed articles={articles} />
    </Container>
  );
}

export default App;
