import React from "react";
import styled from "styled-components";
import { ItodoItemProps, todoStatus } from "./todo";

const TodoItem: React.FC<ItodoItemProps> = ({
  lastItem,
  todoItem,
  setTodoItems,
}) => {
  return (
    <Item className={`${lastItem ? "shadow-three" : ""}`}>
      <div className="tick-container">
        <img
          className={`icon-tick ${
            todoItem.status === todoStatus.Completed ? "show" : ""
          }`}
          src="./images/tick.png"
          alt="tick"
        />
      </div>
      <p
        className={`todo-text ${
          todoItem.status === todoStatus.Completed ? "done" : ""
        }`}
      >
        {todoItem.task}
      </p>

      <img className="icon-close" src="./images/close.png" alt="close" />
    </Item>
  );
};

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ededed;
  padding: 8px 16px;

  @media (min-width: 992px) {
    &:hover {
      .icon-close {
        opacity: 0.3;
      }
    }
  }

  &.shadow-three {
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgb(0 0 0 / 20%);
  }

  .tick-container {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: solid #ededed 1px;
    cursor: pointer;

    .icon-tick {
      opacity: 0;
      width: 24px;
      height: 24px;

      @media (hover: hover) {
        &:hover {
          opacity: 0.3;
        }
      }

      &.show {
        opacity: 1;
      }
    }
  }

  .todo-text {
    width: 65%;
    margin: 0 20px;
    font-size: 20px;
    overflow-wrap: break-word;
    word-wrap: break-word;

    @media (min-width: 425px) {
      width: 72%;
    }

    @media (min-width: 768px) {
      width: 80%;
    }
  }

  .done {
    text-decoration: line-through 3px rgba(174, 179, 184);
    color: rgba(0, 0, 0, 0.5);
  }

  .icon-close {
    position: absolute;
    top: 50%;
    right: 24px;
    transform: translateY(-50%);
    opacity: 0.5;
    width: 16px;
    height: 16px;
    cursor: pointer;

    @media (min-width: 992px) {
      opacity: 0;
    }

    @media (hover: hover) {
      &:hover {
        opacity: 1;
      }
    }
  }
`;

export default TodoItem;
