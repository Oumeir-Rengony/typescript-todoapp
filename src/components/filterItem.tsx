import React from "react";
import styled from "styled-components";
import { IfilterItemProps, filterValues } from "./todo";

const FilterItem: React.FC<IfilterItemProps> = ({
  itemsLeft,
  setTodoItems,
}) => {
  //generate filter dropdown dynamically
  const displayFilterList = () => {
    const array = [];
    for (const value in filterValues) {
      array.push(
        <li className="select-box__option" key={value}>
          {value}
        </li>
      );
    }
    return array;
  };

  return (
    <StyledFilter>
      <p className="remaining-items">{itemsLeft} items left</p>

      <div className="select-box">
        <div className="select-box__current">
          <span className="select-box__current-value">All</span>
          <img
            className="select-box__icon"
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
          />
        </div>
        <ul className="select-box__list">{displayFilterList()}</ul>
      </div>

      <div className="remove-item">
        <p>
          Clear
          <span>
            <img className="remove-icon" src="./images/close.png" alt="remove" />
          </span>
        </p>
      </div>
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  font-size: 13px;
  border-bottom: 1px solid #ededed;

  .select-box {
    width: 80px;
    position: relative;
    color: #60666d;
    text-align: center;

    .select-box__current {
      position: relative;
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      outline: none;
      color: #0acf5c;

      .select-box__icon {
        width: 12px;
        opacity: 0.5;
        margin-left: 8px;
      }
    }
    .select-box__list {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      list-style: none;
      display: none;
      background: #f5f5f5;
      z-index: 1;
      box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.1);

      &.show {
        display: block;
      }

      .select-box__option {
        display: block;
        padding: 4px 8px;

        &:hover {
          color: #546c84;
          background-color: #e6e4e4;
        }
      }
    }
  }

  .remove-item {
    border: none;
    background-color: transparent;
    font-family: inherit;
    padding: 0;
    cursor: pointer;
    font-size: 13px;

    .remove-icon {
      width: 10px;
      margin-left: 8px;
    }
  }
`;

export default FilterItem;
