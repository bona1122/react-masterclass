import { useForm } from "react-hook-form";
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const todoList = atom<ITodo[]>({
  key: "todoList",
  default: [],
});

interface ITodo {
  text: string;
  categoty: "DONE" | "TO_DO" | "DOING";
  id: number;
}

interface IForm {
  todo: string;
}
function ToDoList() {
  const [todos, setTodos] = useRecoilState(todoList);
  // const value = useRecoilValue(todoList);
  // const modFn = useSetRecoilState(todoList);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setValue("todo", "");
    setTodos((prev) => [
      { id: Date.now(), text: todo, categoty: "TO_DO" },
      ...prev,
    ]);
  };
  // console.log(todos);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("todo", {
            required: "please write a todo",
          })}
          type="text"
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
