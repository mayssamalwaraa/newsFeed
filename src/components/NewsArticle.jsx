import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledCard } from "./StyledCard";
import { Link } from "@mui/material";

function NewsArticle(props) {
  const { image, title, description, author, publishedAt, url } = props;
  return (
    <StyledCard>
      <Link target="_blank" href={url}>
        <CardActionArea>
          {image && (
            <CardMedia
              component="img"
              height="200"
              image={image}
              alt="Sample article"
            />
          )}
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Box p={2}>
          <Typography variant="caption" color="textSecondary" display="block">
            {author}
          </Typography>
          {publishedAt && (
            <Typography variant="caption" color="textSecondary">
              {new Date(publishedAt).toLocaleDateString()}
            </Typography>
          )}
        </Box>
      </Link>
    </StyledCard>
  );
}
export default NewsArticle;
