import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "./AddMovie.css";
import { useDispatch } from "react-redux";
import { addMovie } from "../../Redux/Actions/Action";
import { v4 as uuidv4 } from "uuid";

const AddMovie = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    img: "",
    title: "",
    isDone: false,
  });
  const handleAdd = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.taget.value })
  }
  const dispatch = useDispatch();
  const handleSubmit = () => {
    // console.log(newMovie)
    dispatch(addMovie(newMovie));
    setShow(false);
  };

  return (
    <div>
      {" "}
      <Button variant="dark" onClick={handleShow} style={{ marginTop: "8px" }}>
        Add Movie
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        className="addcontainer"
        bg="dark"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="addmodal">
            <label htmlFor="">Movie Cover URL </label>
            <input
              type="text"
              name="img"
              onChange={handleAdd}
              value={newMovie}
            />
            <label htmlFor="">Movie Name </label>
            <input type="text" name="title" onChange={handleAdd} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
