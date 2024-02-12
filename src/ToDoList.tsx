import { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
//   const [todo, setTodo] = useState("");
//   const [todoError, setTodoError] = useState("");
//   const onChange = (e: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = e;
//     setTodoError("");
//     setTodo(value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (todo.length < 10) return setTodoError("to do should be longer");
//     console.log("submit");
//   };
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <input
//           value={todo}
//           onChange={onChange}
//           type="text"
//           placeholder="Write a to do"
//         />
//         <button>Add</button>
//         {todoError !== "" ? todoError : null}
//       </form>
//     </div>
//   );
// }

function ToDoList() {
  const { register, watch } = useForm();
  // console.log(register("todo"));
  console.log(watch()); // 입력갑 추적 가능
  return (
    <div>
      <form>
        <input {...register("email")} placeholder="Write a to do" />
        <input {...register("firstName")} placeholder="Write a to do" />
        <input {...register("lastName")} placeholder="Write a to do" />
        <input {...register("username")} placeholder="Write a to do" />
        <input {...register("password")} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}
export default ToDoList;
