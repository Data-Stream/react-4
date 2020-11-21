
import React, {useState} from "react";
import 'font-awesome/css/font-awesome.min.css';
import Header from "./Header";
import Form from "./Form";
import Todos from "./Todos";


function App() {
    const [todos, setTodos] = useState([
        {
            text: "Убить дракона",
            favorite: false
        },
        {
            text: "Убить годзилу",
            favorite: false
        },
        {
            text: "Убить акулу",
            favorite: false
        }
    ]);

    const [text, setText] = useState("");

    const addTodo = () => {
        setTodos([
            {
                text: text,
                favorite: false
            },
            ...todos
        ]);
    }

  return (
      <div className="app">
        <Header />
        <Form text={text} setText={setText} addTodo={addTodo} />
        <Todos />
      </div>
  );
}

export default App;
