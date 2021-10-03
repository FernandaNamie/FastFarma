import React from "react";
import styled from 'styled-components';
import { FavoriteBorder } from "@material-ui/icons";
import { PersonOutlineOutlined } from "@material-ui/icons";
import { ShoppingCartOutlined } from "@material-ui/icons";

export default function NavBar() {
    return (
        <div>
            <Bar> 
                <Logo>FastFarma</Logo> 
                <StyledSearchInput placeholder="O que você está procurando?"/>
                <ShoppingCartOutlined />
                <PersonOutlineOutlined />
                <FavoriteBorder />
            </Bar>
        </div>
    )
}

const Logo = styled.h2`
  display: inline-block;
  color: #37B9C5;
  font-family: 'Manrope', sans-serif;
  font-size: 20px;
  padding-left: 20px;
  font-weight: bold;
  margin-top: 10px;
  }
`

const Bar = styled.a`
  display: inline-block;
  background: #CBDFE1;
  width: 100%;
  height: 70px;
  padding-top: 10px;
  margin: 0;
  }
`
  
const StyledSearchInput = styled.input`
  display: inline-block;
  background: white;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border-width: 0;
  font-size: 12px;
  text-align: center;
  margin-left: 40%;
  margin-right: 10%;
  }
`