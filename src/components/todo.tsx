import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./todoItem";

export enum todoStatus {
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

const Todo: React.FC = () => {
  //State
  const [todoItems, setTodoItems] = useState<ItodoItemsObject[]>([
    {
      id: 1,
      task: "hello",
      status: todoStatus.Active,
    },
  ]);

  const [inputTodo, setInputTodo] = useState<string>("");

  return (
    <TodoForm>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={inputTodo}
      />

      <div className="todo-list">
        <ul>
          {todoItems.map((item, index) => (
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
