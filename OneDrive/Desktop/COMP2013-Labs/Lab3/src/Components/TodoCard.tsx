//this component will contain
//1. a vody for the title of the todo message
//2. a button for deleting this to do entry
//3. a button to edit to do 

//todocard

import type { TodoCardProps }  from "./TodoApp";

export default function TodoCard({checked, title}: TodoCardProps)
{
    return(
        <div>
        <input type="checkbox" name= "checked" id="checked" checked={checked}/>
        <span>{title}</span>
        <button>Delete</button>
        <button>Edit</button>
    </div>
    );
}