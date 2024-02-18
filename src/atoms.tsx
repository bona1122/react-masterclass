import { atom } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"],
});
