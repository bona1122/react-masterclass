import { useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { todoList } from "./atoms";
import Todo from "./Todo";

function ToDoList() {
  const todos = useRecoilValue(todoList);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
