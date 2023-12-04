import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addaction } from "../redux/action";

const AddFilm = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rate, setRate] = useState(0);
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFilms = {
      id: Math.random(),
      imgUrl: image,
      name: name,
      date: date,
      rating: rate,
      Description: desc,
    };
    if (name && image && date && rate && desc) {
      dispatch(addaction(newFilms));

      handleClose();
    } else {
      alert("please fill all the form");
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal
        className="modal-b"
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header closeButton id="modal-close">
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-inp">
          <form
            action=""
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onSubmit={handleSubmit}
          >
            <label htmlFor="">Movie name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="">Cover url</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <label htmlFor="">Relase date</label>
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <label htmlFor="">Rating</label>
            <input
              type="text"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
            <label htmlFor="">Description</label>
            <input
              type="text"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <Button id="save-changes" variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="submit">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddFilm;
