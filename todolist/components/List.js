import React from "react";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa";
function List({ items, removeItem, editItem }) {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <Articl key={id}>
            <p>{title}</p>
            <div>
              <button>
                <FaEdit onClick={() => editItem(id)} />
              </button>
              <button2>
                <FaTrash onClick={() => removeItem(id)} />
              </button2>
            </div>
          </Articl>
        );
      })}
    </div>
  );
}
const Articl = styled.div`
  display: flex;
  background:#fff;
  overflow-y: auto;
  margin: 10px 10px;
  width: 500px;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding:6px;
  button,
  button2 {
    background-color: #3e3e;
    padding: 5px 8px;
    margin: 3px;
    border: none;
    border-radius: 10px;
  }
  button::hover,
  button2::hover {
    border: 1px solid burlywood;
  }
  button2 {
    background: red;
  }
`;

export default List;
