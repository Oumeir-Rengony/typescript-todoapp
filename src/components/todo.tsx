import React, { useState } from "react";
import styled from "styled-components";
import {
  getLocalstorageItem,
  setLocalstorageItem,
} from "../helper/localstorage";
import FilterItem from "./filterItem";
import TodoItem from "./todoItem";

export enum todoStatus {
  Active = "Active",
  Completed = "Completed",
}

export enum filterValues {
  All = "All",
  Active = "Active",
  Completed = "Completed",
}

export interface ItodoItemsObject {
  id: number;
  task: string;
  status: todoStatus;
}

export interface ItodoItemProps {
  lastItem: boolean;
  todoItem: ItodoItemsObject;
  setTodoItems: React.Dispatch<React.SetStateAction<ItodoItemsObject[]>>;
}

export interface IfilterItemProps {
  itemsLeft: number;
  setTodoItems: React.Dispatch<React.SetStateAction<ItodoItemsObject[]>>;
  activeFilter: filterValues;
  setActiveFilter: React.Dispatch<React.SetStateAction<filterValues>>;
}

const Todo: React.FC = () => {
  //State
  const [todoItems, setTodoItems] = useState<ItodoItemsObject[]>(
    getLocalstorageItem()
  );

  const [activeFilter, setActiveFilter] = useState<filterValues>(
    filterValues.All
  );
  const [inputTodo, setInputTodo] = useState<string>("");

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTodo(e.target.value);
  };

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //if only whitespaces return
    if(!inputTodo.trim())
      return;

    const newTodoItem = {
      id: todoItems.length,
      task: inputTodo,
      status: todoStatus.Active,
    };

    setLocalstorageItem([...todoItems, newTodoItem]);
    setTodoItems([...todoItems, newTodoItem]);
    setInputTodo("");
  };

  //filter todoItems based on current filter option chosen by user
  const filterTodoItem = () => {
    //if activefilter=All return original todoItems array
    if (activeFilter === filterValues.All) {
      return todoItems;
    }

    //else return todoItems basd on active or completed status
    return todoItems.filter((item) => item.status.toString() === activeFilter);
  };

  return (
    <TodoForm onSubmit={formSubmitHandler}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputTodo}
        onChange={inputChangeHandler}
      />

      <FilterItem
        itemsLeft={
          todoItems.filter((item) => item.status === todoStatus.Active).length
        }
        setTodoItems={setTodoItems}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <div className="todo-list">
        <ul>
          {filterTodoItem().map((item, index) => (
            <TodoItem
              key={index}
              lastItem={index === todoItems.length - 1}
              todoItem={item}
              setTodoItems={setTodoItems}
            />
          ))}
        </ul>
      </div>
    </TodoForm>
  );
};

const TodoForm = styled.form`
  width: 90%;
  margin: 12px auto;
  background: #fff;

  .info-section {
    width: 100%;
    font-size: 14px;
    padding: 8px 16px;

    .remaining-items {
      display: inline-block;
    }

    .filter {
      display: inline-flex;
    }
  }

  .new-todo {
    width: 100%;
    font-size: 20px;
    line-height: 1.4em;
    padding: 8px 16px;
    border: none;
    outline: none;
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
  }
`;

export default Todo;
