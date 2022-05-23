import React from 'react'
import { ListWrapper } from './List.style'

const List = ({list}) => {
  return (
    <ListWrapper>
      <h4>{list.title}</h4>
    </ListWrapper>
  )
}

export default List