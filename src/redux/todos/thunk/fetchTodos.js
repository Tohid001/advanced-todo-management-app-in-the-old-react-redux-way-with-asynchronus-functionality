import { loaded } from "../actions";
import { api } from "../../../constants";

const fetchTodos = async (dispatch) => {
  const response = await fetch(`${api}/todos`);
  const todos = await response.json();

  dispatch(loaded(todos));
};

export default fetchTodos;
