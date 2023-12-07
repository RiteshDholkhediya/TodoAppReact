import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [uid, setUid] = useState("");
  const [btnText, setBtnText] = useState("Add Todo");

  return (
    <>
      <AddTodo
        input={input}
        setInput={setInput}
        btnText={btnText}
        setBtnText={setBtnText}
        uid={uid}
      />
      <Todos setBtnText={setBtnText} setInput={setInput} setUid={setUid} />
    </>
  );
}

export default App;
