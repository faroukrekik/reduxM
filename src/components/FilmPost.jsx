import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteaction } from "../redux/action";
import StarRating from "./StarRating";

const FilmPost = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Card style={{ width: "300px", margin: "15px" }}>
        <Card.Img
          variant="top"
          src={el.imgUrl}
          style={{ width: "300px", height: "350px" }}
        />
        <Card.Body
          style={{
            height: "325px",
            width: "300px",
          }}
        >
          <Card.Title style={{ height: "50px", color: "#333333" }}>
            {el.name}
          </Card.Title>
          <Card.Text
            style={{ height: "15px", color: "#999999", fontSize: "1.25rem" }}
          >
            {el.date}
          </Card.Text>
          <Card.Text style={{ height: "20px" }}>{el.rating}</Card.Text>
          <Card.Text
            style={{
              fontSize: "10px",
              width: "250px",
              height: "100px",
              margin: "15px 0px",
              color: "#777777",
            }}
          >
            {el.Description}
          </Card.Text>
          <Card.Text style={{ height: "15px" }}>
            {" "}
            <StarRating rating={el.rating} />{" "}
          </Card.Text>

          <Button variant="primary">More details</Button>
          <Button
            onClick={() => dispatch(deleteaction(el.id))}
            style={{ margin: "15px" }}
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FilmPost;
