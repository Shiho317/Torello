import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoginForm = styled.form`
  padding: 1rem;
  background: ${props => props.theme.color.black}
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & input{
    width: 100%;
    border: none;
    outline: none;
    background: white;
    border-radius: 5px;
    padding: 0 0.5rem;
  }

  & button{
    border: none;
    background: ${props => props.theme.color.white};
    color: ${props => props.theme.color.black};
    width: 10rem;
    height: 2.5rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`