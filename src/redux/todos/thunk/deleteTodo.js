import { deleted } from "../actions";
import { api } from "../../../constants";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    await fetch(`${api}/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
