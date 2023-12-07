/* eslint-disable react/prop-types */

import { addTodo, updateTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

function AddTodo({ input, setInput, btnText, setBtnText, uid }) {
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (btnText === "Update") {
      dispatch(updateTodo({ id: uid, text: input }));
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
    setBtnText("Add Todo");
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg ">
        {btnText}
      </button>
    </form>
  );
}

export default AddTodo;
