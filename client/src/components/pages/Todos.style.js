import styled from "styled-components";


export const TodoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 0.5rem;
  background: white;
  border-radius: 5px;

  & p{
    color: black;
    font-size: 0.9rem;
  }
`

export const TodoDue = styled.div`
  width: 50%;
  background: green;
  padding: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: white;
  border-radius: 3px;
  margin-top: 0.3rem;
  
  & p{
    color: white;
    font-size: 0.8rem;
  }
`

export const TodoUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 0.3rem;

  & p{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${props => props.theme.color.lightgrey};
    color: white;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`