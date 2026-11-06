//this component will have a todo list as  aprop
//then we will map into several todocards
//todocontainer
import type {TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";
export default function TodosContainer({todosList}: TodosContainerProps)
{
  return(
  <div>
    {todosList.map((todo) => (<TodoCard 
    key= {todo.id} {...todo} />
  ))}
  </div>
  );
}

