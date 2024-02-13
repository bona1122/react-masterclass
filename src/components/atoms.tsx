import { atom } from "recoil";

export interface ITodo {
  text: string;
  categoty: "DONE" | "TO_DO" | "DOING";
  id: number;
}

export const todoList = atom<ITodo[]>({
  key: "todoList",
  default: [],
});
