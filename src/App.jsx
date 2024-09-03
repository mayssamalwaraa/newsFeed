import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import NewsFeed from "./components/NewsFeed";
import NewsHeader from "./components/NewsHeader";

const apiKey = import.meta.env.VITE_NEWS_FEED_API_KEY;
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const loadArticles = async (inputQuery) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${inputQuery}&country=eg&apiKey=${apiKey}`
    );
    if (!response.ok) console.log("errrrrrrrrrrrrrrr");
    const data = await response.json();
    // console.log(`data ${data}`);
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
  console.log("reeevaluted");
  useEffect(() => {
    setLoading(true);
    loadArticles("").then((newArticles) => {
      setArticles(newArticles);
      setLoading(false);
    });
  }, []);
  const handleSearchInput = (newQuery) => {
    setLoading(true);
    loadArticles(newQuery).then((newArticles) => {
      setArticles(newArticles);
      setLoading(false);
    });
  };
  return (
    <Container>
      <NewsHeader onSearchChange={handleSearchInput} />
      <NewsFeed articles={articles} loading={loading} />
    </Container>
  );
}

export default App;
