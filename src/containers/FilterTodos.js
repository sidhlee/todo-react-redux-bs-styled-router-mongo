import { connect } from "react-redux";
import Todos from "../components/Todos";
import { toggleTodo, filterTypes } from "../store/actions";

const filterTodos = (todos, filter) => {
  switch (filter) {
    case filterTypes.SHOW_ALL:
      return [...todos];
    case filterTypes.SHOW_COMPLETED:
      return [...todos].filter(todo => todo.completed);
    case filterTypes.SHOW_ACTIVE:
      return [...todos].filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const mapStateToProps = ({ currentFilter, todos }) => ({
  filteredTodos: filterTodos(todos, currentFilter),
  currentFilter
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
