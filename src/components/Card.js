import React, { useState } from "react";
import { ShoppingCartOutlined } from "@material-ui/icons";
import remedio from "../img/remedio.png";
import {
  Border,
  Title,
  Price,
  DivQuantidade,
  ButtonLess,
  Quantidade,
  ButtonPlus,
  ButtonShopping,
} from "./StyledComponents";

export default function Card(props) {
  const [quantidadeProduto, setQuantidadeProduto] = useState(0);

  function handleClickLess() {
    if (quantidadeProduto === 0) {
      setQuantidadeProduto(0);
    } else {
      setQuantidadeProduto(quantidadeProduto - 1);
    }
  }

  return (
    <Border id={props.id}>
      <img src={remedio} width="120px" />
      <Title>{props.nome}</Title>
      <Price>R${props.preco.toString().replace(".", ",")}</Price>
      <DivQuantidade>
        <ButtonLess
          onClick={(e) => {
            props.handleClickLess(e, props.index);
          }}
        >
          -
        </ButtonLess>
        <Quantidade>{props.quantidade}</Quantidade>
        <ButtonPlus
          onClick={(e) => {
            props.handleClickPlus(e, props.index);
          }}
        >
          +
        </ButtonPlus>
        <ButtonShopping
          onClick={(e) => {
            props.toggleDrawer(e, true);
          }}
        >
          <ShoppingCartOutlined />
        </ButtonShopping>
      </DivQuantidade>
    </Border>
  );
}
