import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { TodoDue, TodoUser, TodoWrapper } from './Todos.style'

const Todos = ({ todo }) => {
  const userLogo = todo.user.split('')[0].toUpperCase();

  return (
    <TodoWrapper>
      <p>{todo.todo}</p>
      <TodoDue>
        <AiOutlineClockCircle />
        <p>{todo.due}</p>
      </TodoDue>
      <TodoUser>
        <p>{userLogo}</p>
      </TodoUser>
    </TodoWrapper>
  )
}

export default Todos