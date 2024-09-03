import { AppBar, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: theme.palette.common.white,
  },
  marginLeft: "auto",
  width: 200,
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 5),
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
const StyledSelect = styled(Select)(({ theme }) => ({
  color: theme.palette.action,
  backgroundColor: theme.palette.common.white,
  "&:before": {
    borderColor: theme.palette.action,
  },
  "&:after": {
    borderColor: theme.palette.action,
  },
  "& .MuiSelect-icon": {
    color: theme.palette.action,
  },
  margin: theme.spacing(2),
  width: 200,
  height: 40,
}));
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.text.primary,
}));
function NewsHeader(props) {
  const { onSearchChange, category, onCategoryChange } = props;
  const handleInputChange = (event) => {
    let query = event.target.value;
    onSearchChange(query);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">News feed</Typography>
        <StyledSelect value={category} onChange={onCategoryChange}>
          <StyledMenuItem value="general">General</StyledMenuItem>
          <StyledMenuItem value="business">Business</StyledMenuItem>
          <StyledMenuItem value="entertainment">Entertainment</StyledMenuItem>
          <StyledMenuItem value="health">Health</StyledMenuItem>
          <StyledMenuItem value="science">Science</StyledMenuItem>
          <StyledMenuItem value="sports">Sports</StyledMenuItem>
          <StyledMenuItem value="technology">Technology</StyledMenuItem>
        </StyledSelect>
        <Search>
          <SearchIconWrapper>
            <SearchIcon color="action" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            onChange={handleInputChange}
          />
        </Search>
      </Toolbar>
    </AppBar>
  );
}

export default NewsHeader;
