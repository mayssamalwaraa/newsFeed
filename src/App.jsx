import { Container } from "@mui/system";
import NewsFeed from "./components/NewsFeed";
import NewsHeader from "./components/NewsHeader";
import { SAMPLE_ARTICLE } from "./constant/sampleArticle";

function App() {
  return (
    <Container>
      <NewsHeader />
      <NewsFeed articles={SAMPLE_ARTICLE} />
    </Container>
  );
}

export default App;
