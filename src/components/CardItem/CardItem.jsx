import React, { useState } from "react";
import "./CardItem.scss";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActionArea,
  CardActions,
  Box,
  Modal,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 500,
};

const CardItem = (props) => {
  const { poster, title, time, trailer } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345 }} className="movie-card">
      <CardActionArea className="movie-card-item">
        <CardMedia
          component="img"
          height="100"
          image={poster}
          alt={title}
          className="poster"
          onClick={handleOpen}
        />
        <CardContent className="movie-content">
          <Typography
            gutterBottom
            variant="h8"
            component="div"
            textAlign="center"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="movie-time"
          >
            {time}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="show-trailer">
        <Button size="small" color="primary" className="booking">
          ĐẶT VÉ
        </Button>
        <Modal
          open={open}
          onClick={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="modal-trailer"
        >
          <div className="modal fixed inset-0  flex max-h-full  flex-row justify-center bg-black bg-opacity-50 p-0 text-gray-800 sm:mt-0 md:items-center md:p-9 items-center modal-trailer px-3">
            <iframe
              width="650"
              height="450"
              src={`https://www.youtube.com/embed/${trailer}`}
              title={title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default CardItem;
