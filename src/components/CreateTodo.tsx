import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoList } from "./atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoList);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setValue("todo", "");
    setTodos((prev) => [
      { id: Date.now(), text: todo, category: "TO_DO" },
      ...prev,
    ]);
  };
  return (
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
  );
}
export default CreateTodo;
