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
<<<<<<< HEAD
=======
import icon from "../img/logo.png"
>>>>>>> 2ea87fd9472685babda38f6c951bac7c62eb0fba

export default function NavBar(props) {
  return (
    <div>
      <Bar>
<<<<<<< HEAD
=======
        <img src={icon} width="45px" />
>>>>>>> 2ea87fd9472685babda38f6c951bac7c62eb0fba
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
