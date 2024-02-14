import { useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateTodo";
import { Categories, categoryState, todoList, todoSelector } from "./atoms";
import Todo from "./Todo";
import React from "react";

function ToDoList() {
  // const todos = useRecoilValue(todoList);
  const renderList = useRecoilValue(todoSelector);
  // console.log(selectorOutput);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
    setCategory(e.currentTarget.value as any);
  };
  console.log(category);
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          <option value={Categories.TO_DO}>To Do</option>
          <option value={Categories.DOING}>Doing</option>
          <option value={Categories.DONE}>Done</option>
        </select>
      </form>
      <CreateTodo />
      {renderList?.map((item) => (
        <Todo key={item.id} {...item} />
      ))}
    </div>
  );
}

export default ToDoList;
