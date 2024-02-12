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

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  extraError?: string;
}
function ToDoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        // 특정항목에 에러 발생시키기
        "password1",
        { message: "password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." }); //특정항목이 아닌 전체 form 에 해당되는 에러
  };
  return (
    <div>
      <form
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "only naver!",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message?.toString()}</span>
        <input
          {...register("firstName", {
            required: "write here",
            validate: {
              noNico: (value) =>
                value.includes("nico") ? "no nico allowed" : true,
              noLee: (value) =>
                value.includes("Lee") ? "no Lee allowed" : true,
            },
          })}
          placeholder="firstname"
        />
        <span>{errors?.firstName?.message?.toString()}</span>
        <input
          {...register("lastName", { required: "write here" })}
          placeholder="lastname"
        />
        <span>{errors?.lastName?.message?.toString()}</span>
        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="username"
        />
        <span>{errors?.username?.message?.toString()}</span>
        <input
          {...register("password", {
            required: "password is required",
            minLength: {
              value: 5,
              message: "your password is too short",
            },
          })}
          placeholder="password"
        />
        <span>{errors?.password?.message?.toString()}</span>
        <input
          {...register("password1", {
            required: "password1 is required",
            minLength: {
              value: 5,
              message: "your password1 is too short",
            },
          })}
          placeholder="password1"
        />
        <span>{errors?.password1?.message?.toString()}</span>

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}
export default ToDoList;
