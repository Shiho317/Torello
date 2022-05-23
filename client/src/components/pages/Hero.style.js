import styled from "styled-components";

export const HeroWrapper = styled.div`
  padding: 2rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const AddList = styled.div`
height: 3rem;
display: flex;
justify-content: flex-start;
align-items: center;
background: rgba(26, 19, 47, 0.3);
width: 17rem;
border-radius: 5px;
gap: 0.2rem;
padding: 1rem;
color: white;
cursor: pointer;

&:hover{
  background: rgba(26, 19, 47, 0.5);
}

& h4{
  font-size: 0.8rem;
}
`;
