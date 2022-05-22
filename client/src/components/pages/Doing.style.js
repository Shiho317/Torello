import styled from "styled-components";

export const DoingWrapper = styled.div`
background: ${props => props.theme.color.lightgrey};
width: 20rem;
height: 100%;
border-radius: 5px;
padding: 1rem;

& h4{
  color: black;
}
`