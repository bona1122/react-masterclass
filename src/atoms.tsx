import { atom } from "recoil";

interface ITodoState {
  [key: string]: string[];
}

export const todosState = atom<ITodoState>({
  key: "todosState",
  default: {
    "To Do": ["task 1", "task 2", "task 3"],
    doing: ["task 4", "task 5", "task 6"],
    done: ["task 7", "task 8", "task 9"],
  },
});
