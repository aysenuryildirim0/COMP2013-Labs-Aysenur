import { useState, type ChangeEvent, type SubmitEvent } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodosContainer";

export interface TodoCardProps {
  id: string;
  title: string;
  checked: boolean;
}

export interface TodoCardFunctions extends TodoCardProps {
  handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleEditTodo: (id: string) => void;
}

export interface TodosContainerProps {
  todosList: TodoCardProps[];
  handleTodoCheck: (e: ChangeEvent<HTMLInputElement>, id: string) => void;
  handleDeleteTodo: (id: string) => void;
  handleEditTodo: (id: string) => void;
}

export interface FormComponentProps extends TodoCardProps {
  handleFormOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOnSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
}

export default function TodoApp() {
  const [todo, setTodo] = useState<TodoCardProps>({
    id: "",
    title: "",
    checked: false,
  });

  const [todosList, setTodosList] = useState<TodoCardProps[]>([]);

  //Handle the form input change
  const handleFormOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo((prevTodo) => ({ ...prevTodo, title: e.target.value }));
  };

  //2. Onsubmit event
  const handleOnSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.id === "") {
      setTodosList((prevList) => [
        ...prevList,
        { id: crypto.randomUUID(), title: todo.title, checked: false },
      ]);
    } else {
      setTodosList((prevList) =>
        prevList.map((entry) =>
          entry.id === todo.id ? { ...entry, title: todo.title } : { ...entry },
        ),
      );
    }
    setTodo({
      id: "",
      title: "",
      checked: false,
    });
  };

  const handleTodoCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setTodosList((prevList) =>
      prevList.map((entry) =>
        entry.id === id
          ? { ...entry, checked: e.target.checked }
          : { ...entry },
      ),
    );
  };

  //4. Handle deleting
  const handleDeleteTodo = (id: string) => {
    setTodosList((prevList) => prevList.filter((entry) => entry.id !== id));
  };

  //5. Editing
  const handleEditTodo = (id: string) => {
    const todoEntry = todosList.find((entry) => entry.id === id) || {
      title: "",
      id: "",
      checked: false,
    };
    setTodo({ ...todoEntry });
  };

  return (
    <div>
      <h1>To-Do List App:</h1>
      <FormComponent
        {...todo}
        handleFormOnChange={handleFormOnChange}
        handleOnSubmit={handleOnSubmit}
      />
      <TodosContainer
        todosList={todosList}
        handleTodoCheck={handleTodoCheck}
        handleDeleteTodo={handleDeleteTodo}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}
