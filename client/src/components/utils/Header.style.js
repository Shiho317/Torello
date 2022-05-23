import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  padding: 0 2rem;
`;

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.lightgrey};
  display: flex;
  align-items: center;
  justify-content: center;
`;
