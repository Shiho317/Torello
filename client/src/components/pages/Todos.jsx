import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TodoDue, TodoUser, TodoWrapper } from "./Todos.style";
import { Draggable } from "react-beautiful-dnd";

const Todos = ({ todo, index }) => {
  const userLogo = todo.user.split("")[0].toUpperCase();

  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <TodoWrapper
          ref={provided.innerRef}
          snapshot={snapshot}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p>{todo.todo}</p>
          <TodoDue>
            <AiOutlineClockCircle />
            <p>{todo.due}</p>
          </TodoDue>
          <TodoUser>
            <p>{userLogo}</p>
          </TodoUser>
        </TodoWrapper>
      )}
    </Draggable>
  );
};

export default Todos;
