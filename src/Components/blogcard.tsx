import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}
interface Props {
  image: string;
  title: string;
  display_content: string;
  main_content: string;
  likes: number;
  theme: string;
}
const StyledCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "theme",
})(({ theme }) => ({
  maxWidth: 345,
  minHeight: 500,
  cursor: "pointer",
  margin: "2rem",
  transition: "transform 0.3s, box-shadow 0.3s",
  backgroundColor: theme.palette.background.default, // Set background color based on theme
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: theme.shadows[6],
  },
}));

const modalStyle = {
  position: "absolute",
  top: "50%",
  p: "1rem",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: 800,
  boxShadow: 24,
  borderRadius: "0.8rem",
  maxHeight: "90vh",
  overflow: "auto",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  border: "none",
};

export default function BlogCard({
  image,
  title,
  display_content,
  main_content,
  likes,
  theme,
}: Props) {
  const [liked, setLiked] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [numLikes, setNumLikes] = React.useState(() => {
    const savedLikes = localStorage.getItem(title);
    return savedLikes ? parseInt(savedLikes, 10) : likes;
  });
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);

  React.useEffect(() => {
    localStorage.setItem(title, numLikes.toString());
  }, [numLikes, title]);


  const handleLikeClick = () => {
    if (liked) {
      setNumLikes(numLikes - 1);
    } else {
      setNumLikes(numLikes + 1);
    }
    setLiked(!liked);
  };

  const handleShareClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        setAnchorEl(null);
        setSnackbarOpen(true);
      },
      (err) => {
        console.error("Failed to copy: ", err);
      }
    );
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <StyledCard
        sx={{
          backgroundColor: theme === "light" ? "#fff" : "rgb(17, 17, 17)",
          boxShadow:
            theme === "light"
              ? "0px 0px 20px 5px #003399"
              : "0px 0px 20px 5px rgb(68, 157, 68)",
        }}
        onClick={handleModalOpen}
      >
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{
              fontWeight: "bolder",
              color: theme === "light" ? "#003399" : "rgb(68,157,68)",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: theme === "light" ? "text.secondary" : "#e0e0e0d4" }}
          >
            {display_content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ alignSelf: "end" }}>
          <IconButton
            aria-label="Like"
            onClick={(e) => {
              e.stopPropagation();
              handleLikeClick();
            }}
            sx={{ color: liked ? red[500] : "gray" }}
          >
            <FavoriteIcon />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                ml: 1,
                color: theme === "light" ? "text.secondary" : "#e0e0e0d4",
              }}
            >
              {numLikes}
            </Typography>
          </IconButton>
          <IconButton
            aria-label="share"
            onClick={(e) => {
              e.stopPropagation();
              handleShareClick(e);
            }}
          >
            <ShareIcon />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                ml: 1,
                color: theme === "light" ? "text.secondary" : "#e0e0e0d4",
              }}
            >
              Share
            </Typography>
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleCopyLink}>Copy Link</MenuItem>
          </Menu>
        </CardActions>
      </StyledCard>

      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{ ...modalStyle, backgroundColor: theme === "light" ? "#fff" : "rgb(17, 17, 17)", }}
        >
          <Typography
            id="modal-title"
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bolder",
              color: theme === "light" ? "#003399" : "rgb(68,157,68)",
              marginBottom:'2rem',
              marginTop:'0.2rem',
              marginLeft:'auto',
              textAlign:'center'
            }}
          >
            {title}
          </Typography>
          <CardMedia component="img" image={image} alt="Paella dish" />
          <Box sx={{ p: 2 }}>
            <Typography
              id="modal-description"
              variant="body2"
              sx={{
                mt: 2,
                color: theme === "light" ? "black" : "#e0e0e0d4",
                fontSize:'1rem'
              }}
            >
              {main_content}
            </Typography>
            <CardActions disableSpacing>
              <IconButton
                aria-label="add to favorites"
                onClick={(e) => {
                  e.stopPropagation();
                  handleLikeClick();
                }}
                sx={{ color: liked ? red[500] : "gray" }}
              >
                <FavoriteIcon />
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ ml: 1, color: theme === "light" ? "text.secondary" : "#e0e0e0d4", }}
                >
                  {likes}
                </Typography>
              </IconButton>
              <IconButton
                aria-label="share"
                onClick={(e) => {
                  e.stopPropagation();
                  handleShareClick(e);
                }}
              >
                <ShareIcon sx={{color:'gray'}}/>
                <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                ml: 1,
                color: theme === "light" ? "text.secondary" : "#e0e0e0d4",
              }}
            >
              Share
            </Typography>
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleCopyLink}>Copy Link</MenuItem>
              </Menu>
            </CardActions>
          </Box>
        </Box>
      </Modal>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Link copied to clipboard!
        </Alert>
      </Snackbar>
    </>
  );
}
