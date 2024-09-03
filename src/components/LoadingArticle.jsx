import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { StyledCard } from "./StyledCard";
import { Skeleton } from "@mui/material";

function LoadingArticle(props) {
  const { image, title, description, author, publishedAt } = props;
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <Skeleton variant="text" sx={{ fontSize: "5rem" }} />
          <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
        </CardContent>
      </CardActionArea>
      <Box p={2}>
        <Skeleton variant="text" width="200" sx={{ fontSize: "1.5rem" }} />
        <Skeleton variant="text" width="200" sx={{ fontSize: "1.5rem" }} />
      </Box>
    </StyledCard>
  );
}
export default LoadingArticle;
