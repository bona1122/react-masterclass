import { atom, selector } from "recoil";

// type category_type = "DONE" | "TO_DO" | "DOING";
export enum Categories {
  "DONE" = "DONE",
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
}

export interface ITodo {
  text: string;
  category: Categories;
  id: number;
}

export const todoList = atom<ITodo[]>({
  key: "todoList",
  // 로컬스토리지에서 가져오기
  default: JSON.parse(localStorage.getItem("todoList") || "[]"),
  // set 시 마다, 로컬스토리지에 저장
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newTodoList) => {
        localStorage.setItem("todoList", JSON.stringify(newTodoList));
      });
    },
  ],
});

export const categoryState = atom<Categories>({
  key: "categoryState",
  default: Categories.TO_DO,
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoList);
    const category = get(categoryState);

    return todos.filter((todo) => todo.category === category);
  },
});
