import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import * as actions from "../store/actions";

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actions.addTodo(text))
});

export default connect(null, mapDispatchToProps)(TodoForm);
