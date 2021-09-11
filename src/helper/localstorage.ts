import {ItodoItemsObject} from "../components/todo"

export const getLocalstorageItem = () => {
  const localItem = localStorage.getItem("todoItems");
  return localItem !== null ? JSON.parse(localItem) : [];
};

export const setLocalstorageItem = (data: ItodoItemsObject[]) => {
  localStorage.setItem(
    "todoItems",
    JSON.stringify(data)
  );
};

