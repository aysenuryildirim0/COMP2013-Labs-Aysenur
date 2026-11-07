//a form component that will have a text onput for to the todo title
// and a button

import type { FormComponentProps } from "./TodoApp";

export default function FormComponent({
  title,
  handleFormOnChange,
  handleOnSubmit,
}: FormComponentProps) {
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="title">Todo Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleFormOnChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
