import React from "react";
import { FavoriteBorder } from "@material-ui/icons";
import { PersonOutlineOutlined } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import {
  Bar,
  Logo,
  StyledSearchInput,
  ButtonShoppingNavBar,
} from "./StyledComponents";
import "./NavBar.css";
import icon from "../img/logo.png"

export default function NavBar(props) {
  return (
    <div>
      <Bar>
        <img src={icon} width="45px" />
        <Logo>FastFarma</Logo>
        <StyledSearchInput placeholder="O que você está procurando?" />
        <ButtonShoppingNavBar
          onClick={(e) => {
            props.toggleDrawer(e, true);
          }}
        >
          <ShoppingCartOutlined className="cart" />
        </ButtonShoppingNavBar>
        <PersonOutlineOutlined />
        <FavoriteBorder />
      </Bar>
    </div>
  );
}
