import styled from "styled-components";

export const TodoWrapper = styled.div`
  background: ${props => props.theme.color.lightgrey};
  width: 20rem;
  height: 100%;

  & h2{
    color: black;
  }
`