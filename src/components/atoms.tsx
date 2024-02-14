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
  default: [],
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
