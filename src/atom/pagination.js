import { atom, selector } from "recoil";

export const pagination = atom({
  key: "pagination",
  default: 1
});

export const pageQuery = selector({
  key: "pageQuery",
  get: ({get}) => (get(pagination)-1)*10 
});