import { React } from "react";
import { FavoriteBorder } from "@material-ui/icons";
import { PersonOutlineOutlined } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";
import AppsIcon from "@material-ui/icons/Apps";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Bar,
  Logo,
  StyledSearchInput,
  ButtonShoppingNavBar,
} from "./StyledComponents";
import "./NavBar.css";
import icon from "../img/logo.png";

export default function NavBar(props) {
  return (
    <div>
      <Bar>
        <img src={icon} width="45px" style={{ marginLeft: "10px" }} />
        <Link to="/">
          <Logo>FastFarma</Logo>
        </Link>
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
        {props.isPharmacy && (
          <Link to='RegistrarProduto'>
            <AddCircleIcon></AddCircleIcon>
          </Link>
        )
        }
        <NavDropdown title={<AppsIcon />}>
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Item href="/cliente">Cliente</NavDropdown.Item>
          <NavDropdown.Item href="/farmacia"> Farmacia</NavDropdown.Item>
          <NavDropdown.Item href="/motoboy">Motoboy</NavDropdown.Item>
          <NavDropdown.Item href="/Login">Login</NavDropdown.Item>
        </NavDropdown>
      </Bar>
    </div>
  );
}
