import { useState } from "react";
import FormComponent from "./FormComponent";
import TodosContainer from "./TodosContainer";

export interface TodoCardProps
{
    id: string;
    title: string;
    checked: boolean;
    
}

export interface TodosContainerProps{
    todosList: TodoCardProps[];
}

export default function TodoApp()
{
    const [todo, setTodo] = useState<TodoCardProps>({
            id: "",
            title: "",
            checked: false,

        });

    const [todosList, setTodosList] = useState<TodoCardProps[]>([]);

    return <div>
        <h1>To-Do List:</h1>
        <FormComponent {...todo}/>
        <TodosContainer todosList={todosList}/>
    </div>
}