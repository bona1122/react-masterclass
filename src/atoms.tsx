import { atom } from "recoil";

export interface ITodo {
  id: number;
  text: string;
}

interface ITodoState {
  [key: string]: ITodo[];
}

export const todosState = atom<ITodoState>({
  key: "todosState",
  default: {
    "To Do": [],
    doing: [],
    done: [],
  },
});
