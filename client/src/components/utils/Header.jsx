import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import {
  AccountOption,
  HeaderWrapper,
  Icon,
  LogoutModal,
} from "./Header.style";

const Header = () => {
  const { userInfo, myStorage } = useContext(AppContext);
  const currUser = JSON.parse(userInfo);

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
    setTimeout(() => {
      window.location.href = "/"
    }, 500);
  };

  return (
    <HeaderWrapper>
      <h4>Trello</h4>
      <h3>our workspace</h3>
      {currUser.email.length > 0 ? (
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
