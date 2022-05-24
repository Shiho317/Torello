import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import {
  AccountOption,
  HeaderWrapper,
  Icon,
  LogoutModal,
} from "./Header.style";

const Header = () => {
  const { userInfo, myStorage, setLoggedIn } = useContext(AppContext);
  const currUser = JSON.parse(userInfo);
  const navigate = useNavigate();

  const [openLogout, setOpenLogout] = useState(false);
  const openToggle = () => {
    setOpenLogout((prev) => !prev);
  };

  const loggedOut = () => {
    const resetCurrUser = {
      name: '',
      email: '',
      id: ''
    }
    myStorage.setItem("user", JSON.stringify(resetCurrUser));
    setLoggedIn(false)
    alert("You have successfully logged out.");
    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  return (
    <HeaderWrapper>
      <h4>Trello</h4>
      <h3>workspace name</h3>
      {currUser.name.length > 0 ? (
        <Icon onClick={() => openToggle()}>
          <p>{currUser.name.split("")[0].toUpperCase()}</p>
          {openLogout && (
            <LogoutModal>
              <li onClick={() => loggedOut()}>
                <p>Logout</p>
              </li>
            </LogoutModal>
          )}
        </Icon>
      ) : (
        <AccountOption>
          <Link to="/">Login</Link>
          <Link to="/signup">Signup</Link>
        </AccountOption>
      )}
    </HeaderWrapper>
  );
};

export default Header;
