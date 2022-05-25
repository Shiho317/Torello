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
  const { userInfo, myStorage, loggedIn, setLoggedIn } = useContext(AppContext);
  const currUser = JSON.parse(userInfo);

  const navigate = useNavigate()

  const [openLogout, setOpenLogout] = useState(false);
  const openToggle = () => {
    setOpenLogout((prev) => !prev);
  };

  const loggedOut = () => {
    const resetCurrUser = {
      name: "",
      email: "",
      color: "#ECECEC",
      id: "",
    };
    myStorage.setItem("user", JSON.stringify(resetCurrUser));
    alert("You have successfully logged out.");
    setLoggedIn(false)
    setTimeout(() => {
      navigate("/")
    }, 500);
  };

  return (
    <HeaderWrapper>
      <h4>Trello</h4>
      <h3>our workspace</h3>
      {loggedIn ? (
        <Icon
          style={{ backgroundColor: currUser.color }}
          onClick={() => openToggle()}
        >
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
