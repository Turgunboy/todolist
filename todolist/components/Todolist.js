import React, { useState } from "react";
import List from "./components/List";
import styled from "styled-components";

function Todolist() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [editing, setediting] = useState(false);
  const [editId, setEditId] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
    } else if (name && editing) {
      setList(
        list.map((item, id) => {
          if (item.id == editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setediting(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditId(id);
    setediting(true);
    setName(specificItem.title);
  };
  const clearitem = () => {
    setList([]);
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <SectionTodo>
      <Forma onSubmit={handleSubmit}>
        <h3>Grocery bud</h3>
        <InputDiv>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="todo list"
          />
          <Edit_Submit type="submit">{editing ? "edit" : "submit"}</Edit_Submit>
        </InputDiv>
      </Forma>
      {list.length > 0 && (
        <Wrap>
          <List items={list} editItem={editItem} removeItem={removeItem} />
          <ClearButton onClick={clearitem}>clear-btn</ClearButton>
        </Wrap>
      )}
    </SectionTodo>
  );
}
const SectionTodo = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(to bottom, #1e1e, #adad3e);
`;
const Forma = styled.form`
  position: absolute;
  top: 10%;
  right: 10%;
`;
const InputDiv = styled.div`
  padding: 5px;
  input {
    padding: 10px 30px;
    border: none;
    border-radius: 10px;
  }
  input:focus {
    outline: none;
  }
`;
const Wrap = styled.div`
  position: absolute;
  top: 20%;
  height: 400px;
  overflow: scroll;
  left: 10%;
`;
const Edit_Submit = styled.button`
  padding: 10px 20px;
  border: 1px solid red;
  border-radius: 10px;
  margin-left: 10px;
  background-color: rgb(97, 534, 8);
`;
const ClearButton = styled.button`
  padding: 15px;
  background-color: lightcyan;
  border: none;
  border-radius: 10px;
`;

export default Todolist;
