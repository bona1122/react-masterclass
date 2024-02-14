import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoList } from "./atoms";

function Todo({ text, category, id }: ITodo) {
  const setToDos = useSetRecoilState(todoList);
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = e;
    setToDos((prev) => {
      const targetIndex = prev.findIndex((todo) => todo.id === id);
      const newTodo: ITodo = { text, id, category: name as any };
      return [
        ...prev.slice(0, targetIndex),
        newTodo,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };
  const onClickDelete = () => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <button onClick={onClickDelete}>delete</button>
    </li>
  );
}

export default Todo;
