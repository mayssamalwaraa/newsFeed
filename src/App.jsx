import { debounce } from "lodash";
import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import NewsFeed from "./components/NewsFeed";
import NewsHeader from "./components/NewsHeader";
import { Button, styled, Typography } from "@mui/material";
import { useRef } from "react";

const API_KEY = import.meta.env.VITE_NEWS_FEED_API_KEY;
const PAGE_SIZE = 5;
const Footer = styled("div")(({ theme }) => ({
  margin: theme.spacing(2, 0),
  display: "flex",
  justifyContent: "space-between",
}));
function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("general");
  const [error, setError] = useState("");
  const pageNumber = useRef(1);
  const queryValue = useRef("");
  const loadArticles = async (currentCategory) => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${currentCategory}&q=${queryValue.current}&page=${pageNumber.current}&pageSize=${PAGE_SIZE}&country=eg&apiKey=${API_KEY}`
    );
    // if (!response.ok) console.log("errrrrrrrrrrrrrrr");

    const data = await response.json();
    if (data.status === "error") {
      throw new Error("an error has accoured");
    }
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

  const fetchandUpdateArticles = (currentCategory) => {
    setLoading(true);
    setError("");
    loadArticles(currentCategory ?? category)
      .then((newArticles) => {
        setArticles(newArticles);
      })
      .catch((errorMessage) => {
        setError(errorMessage.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const debounceSearchInput = debounce(fetchandUpdateArticles, 500);
  useEffect(() => {
    fetchandUpdateArticles();
  }, []);
  const handleSearchInput = (newQuery) => {
    pageNumber.current = 1;
    queryValue.current = newQuery;
    debounceSearchInput();
  };
  const handlePerviousClick = () => {
    pageNumber.current -= 1;
    fetchandUpdateArticles();
  };
  const handleNextClick = () => {
    pageNumber.current += 1;
    fetchandUpdateArticles();
  };
  const onChangeCategory = (event) => {
    setCategory(event.target.value);
    pageNumber.current = 1;
    fetchandUpdateArticles(event.target.value);
  };
  return (
    <Container>
      <NewsHeader
        onSearchChange={handleSearchInput}
        category={category}
        onCategoryChange={onChangeCategory}
      />

      {error.length === 0 ? (
        <NewsFeed articles={articles} loading={loading} />
      ) : (
        <Typography color="red" align="center">
          {error}
        </Typography>
      )}
      <Footer>
        <Button
          variant="outlined"
          onClick={handlePerviousClick}
          disabled={loading || pageNumber.current == 1}
        >
          Previous
        </Button>
        <Button
          variant="outlined"
          onClick={handleNextClick}
          disabled={loading || articles.length < PAGE_SIZE}
        >
          Next
        </Button>
      </Footer>
    </Container>
  );
}

export default App;
