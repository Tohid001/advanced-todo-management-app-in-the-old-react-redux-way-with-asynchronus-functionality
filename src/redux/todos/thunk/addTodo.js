import { added } from "../actions";
import { api } from "../../../constants";

const addTodo = (todoText) => {
  return async (dispatch) => {
    const response = await fetch(`${api}/todos`, {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();

    dispatch(added(todo.text));
  };
};

export default addTodo;
