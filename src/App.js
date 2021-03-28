import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import { useEffect, useState } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // When the app loads, we need to listen to the database AND fetch new todos as
  // they get added/removed

  useEffect(() => {
    // The code here only runs once
    // SNAPSHOT : Te ayuda a que cada vez que la base de datos cambie
    // te envía un nuevo snapshot(foto) o te envía la info.

    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>To-do App</h1>

      <FormControl>
        <InputLabel>Write a todo</InputLabel>
        <Input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </FormControl>

      <Button
        disabled={!input}
        type="submit"
        onClick={addTodo}
        variant="contained"
        color="primary"
      >
        Add todo
      </Button>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
