import {
  Apps,
  ArrowDropDown,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-0.png"
          alt=""
        />
      </div>
      <div className="header__middle">
        <Search />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDown className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <Apps />
        </IconButton>
        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
