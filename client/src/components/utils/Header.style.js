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
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.lightgrey};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const LogoutModal = styled.ul`
  position: absolute;
  top: 40px;
  right: 0;
  background: white;
  width: 10rem;
  height: 3rem;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.2);
  
  & li{
    list-style: none;

    & p{
      color: black;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`

export const AccountOption = styled.div`
  display: flex;
  aling-items: center;
  justify-content: center;
  gap: 1rem;

  & a{
    text-decoration: none;
    color: ${props => props.theme.color.white};

    &:hover{
      transition: all 0.3s ease;
      opacity: 0.8;
    }
  }
`
