import {
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@material-ui/core";
import React, { useState } from "react";
import "./Todo";
import db from "./firebase";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Todo({ todo }) {
  const [open, setOpen] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div>
          <h1>I am a modal</h1>
          <button onClick={(e) => setOpen(false)}></button>
        </div>
      </Modal>

      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={todo.todo} secondary="Todo Uncompleted" />
        </ListItem>
        <button onClick={(e) => setOpen(true)}>UPDATE</button>
        <DeleteForeverIcon
          onClick={(e) => db.collection("todos").doc(todo.id).delete()}
        />
      </List>
    </>
  );
}

export default Todo;
