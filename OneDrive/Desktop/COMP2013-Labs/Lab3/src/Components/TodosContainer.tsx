//this component will have a todo list as  aprop
//then we will map into several todocards
//todocontainer
import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";
export default function TodosContainer({
  todosList,
  handleTodoCheck,
  handleDeleteTodo,
  handleEditTodo,
}: TodosContainerProps) {
  return (
    <div>
      {todosList.length > 0 || "Todo List is Empty"}
      {todosList.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          handleTodoCheck={handleTodoCheck}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
}
