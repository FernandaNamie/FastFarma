import React, { useState } from "react";
import styled from 'styled-components';
import { ShoppingCartOutlined } from "@material-ui/icons";
import remedio from './remedio.png';

export default function Card(props) {
    
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);

    function handleClickLess() {
        if (quantidadeProduto === 0) {
            setQuantidadeProduto(0)
        } else {
            setQuantidadeProduto(quantidadeProduto - 1)
        }
    }

    return (
        <Border>
            <img src={remedio} width="120px"/>
            <Title>{props.nome}</Title>
            <Price>R${props.preco},00</Price>
            <DivQuantidade >
                <ButtonLess onClick={(e) => {props.handleClickLess(e, props.index)}}>-</ButtonLess>
                <Quantidade>{props.quantidade}</Quantidade>
                <ButtonPlus onClick={(e) => {props.handleClickPlus(e, props.index)}}>+</ButtonPlus>
                <ButtonShopping onClick={(e) => {props.toggleDrawer(e, true)}}>
                <ShoppingCartOutlined />
                </ButtonShopping>
            </DivQuantidade>
        </Border>
    );
}

const Border = styled.span`
  display: inline-block;
  width: 150px;
  height: 250px;
  border: 1px solid;
  border-color: #DDDDDD;
  box-shadow: 5px 5px #EEEEEE;
  border-radius: 10px;
  margin-top: 30px;
  margin-left: 50px;
  text-align: left;
  }
`

const Title = styled.div`
  display: inline-block;
  font-weight: 400;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 13px;
  color: #555555;
  margin-left:8px;
  }
`

const Price = styled.div`
  display: inline-block;
  font-weight: 500;
  font-family: 'Manrope', sans-serif;
  font-size: 17px;
  color: #FF5A5A;
  margin-left:8px;
  margin-top: 15px;
  }
`

const ButtonLess = styled.button`
  display: inline-block;
  background-color: #CBDFE1;
  color: #37B9C5;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  margin-left: 8px;
  padding:0;
  line-height:25px;
  }
`

const ButtonPlus = styled.button`
  display: inline-block;
  background-color: #37B9C5;
  color: #CBDFE1;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  margin-left: 8px;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
  padding:0;
  line-height:25px;
  }
`

const DivQuantidade = styled.div`
    // background-color: #F0F3F6;
    height: 25px;
    padding: 0;
    margin-top: 17px;
}
`
const Quantidade = styled.span`
    display: inline-block;
    text-align: center;
    margin-left: 8px;
    font-family: 'Nunito Sans', sans-serif;
}
`

const ButtonShopping = styled.button`
    display: inline-block;
    text-align: center;
    background-color: white;
    border:0;
    cursor:pointer;
}
`