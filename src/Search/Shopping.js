import * as React from 'react';
import { useState } from 'react';
import { Box } from '@material-ui/system';
import styled from 'styled-components';
import remedio from './remedio.png';
import { Col, Row } from 'react-bootstrap';
import { Delete, ShoppingCartOutlined } from '@material-ui/icons';

export default function TemporaryDrawer(props) {

    const pedidos = props.pedidos;

  let total = 0;
  for(let i = 0; i < pedidos.length; i++) {
      total = total + pedidos[i].preco * pedidos[i].quantidade;
  }

  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={(e) => {props.toggleDrawer(e, false)}}
      value={props.value}
    >
        <div>
            <ButtonClose value={props.value} onClick={(e) => {props.toggleDrawer(e, false)}} >x</ButtonClose>
        </div>
        <Titulo>Sacola</Titulo>
        {pedidos.map((pedido, idx) => {
            if (pedido.quantidade > 0) {
                return (
                    <Card>
                        <Col md="3">
                            <img src={remedio} width="70px"/>
                        </Col>
                        <Col>
                            <Row>
                                <Col md="9">
                                {pedido.nome}
                                </Col>
                                <ButtonDelete onClick={(e) => {props.handleDelete(e, idx)}}><Delete /></ButtonDelete>
                            </Row>
                            <Estoque>Em Estoque</Estoque>
                            <Row>
                                <Col md="4">
                                    <Price>R${pedido.preco},00</Price>
                                </Col>
                                <Col md="1">
                                    <ButtonLess onClick={(e) => {props.handleClickLess(e, idx)}}>-</ButtonLess>
                                </Col>
                                <Col md="1">
                                    <Quantidade>{pedido.quantidade}</Quantidade>
                                </Col>
                                <Col md="1">
                                    <ButtonPlus onClick={(e) => {props.handleClickPlus(e, idx)}}>+</ButtonPlus>
                                </Col>
                                <Col md="1">
                                    <ButtonShopping>
                                    <ShoppingCartOutlined />
                                    </ButtonShopping>
                                </Col>
                            </Row>
                        </Col>
                        <hr />
                    </Card>
                );
            }})}
        {pedidos.map((pedido) => {
            if(pedido.quantidade > 0){
                return(
                    <Row>
                        <Col md="8">
                            <ProdutoQuantidade>{pedido.quantidade} produto(s)</ProdutoQuantidade>
                        </Col>
                        <Col>
                            <ProdutoPreco>R${pedido.preco},00</ProdutoPreco>
                        </Col>
                    </Row>
                );
            }
        })}
        <Row>
            <Col md="8">
                <ProdutoQuantidade>Desconto</ProdutoQuantidade>
            </Col>
            <Col>
                <ProdutoPreco>R$0,00</ProdutoPreco>
            </Col>
        </Row>
        <Row>
            <Col md="8">
                <ProdutoQuantidade>Frete</ProdutoQuantidade>
            </Col>
            <Col>
                <ProdutoPreco>R$0,00</ProdutoPreco>
            </Col>
        </Row>
        <hr />
        <Row>
            <Col md="7">
                <Total>Total</Total>
            </Col>
            <Col>
                <Total>R${total},00</Total>
            </Col>
        </Row>
        <ButtonEnd>Finalizar pedido</ButtonEnd>
    </Box>
  );
}


const Titulo = styled.h3`
  display: inline-block;
  text-align: justify;
  margin-left: 34%;
  font-weight: 600;
  }
`

const ButtonClose = styled.button`
display: inline-block;
text-align: center;
width: 25px;
height: 25px;
border-radius: 12px;
padding:0;
font-size:20px;
border: 2px solid;
border-color: #37B9C5;
background-color: white;
color: #37B9C5;
margin-left:86%;
margin-top: 10px;
line-height: 10px;
}
`

const Card = styled(Row)`
  margin-top: 10px;
  font-size: 12px;
  }
`

const ButtonDelete = styled.button`
  width: 10px;
  text-align:center;
  border: 0;
  background-color: white;
}
`

const Price = styled.span`
  font-size: 16px;
  font-weight: 700;
}
`

const Estoque = styled.span`
  color: #37B9C5;
  font-weight:600;
}
`

const ButtonLess = styled.button`
  background-color: #CBDFE1;
  color: #37B9C5;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  padding:0;
  line-height:25px;
  }
`

const ButtonPlus = styled.button`
  background-color: #37B9C5;
  color: #CBDFE1;
  border: 0;
  width: 25px;
  height: 25px;
  border-radius: 12px;
  font-size: 20px;
  cursor: pointer;
  margin-right: 20px;
  padding:0;
  line-height:25px;
  }
`
const ButtonShopping = styled.button`
    text-align: center;
    background-color: white;
    border:0;
    cursor:pointer;
    margin-bottom: 10px;
    margin-left: 25px;
}
`

const Quantidade = styled.span`
    text-align: center;
    font-family: 'Nunito Sans', sans-serif;
    padding:0;
    line-height:10px;
    margin-left:10px;
}
`

const ButtonEnd = styled.button`
  background-color: #37B9C5;
  color: white;
  border: 0;
  width: 250px;
  height: 25px;
  border-radius: 12px;
  font-size: 12px;
  cursor: pointer;
  margin-left: 24px;
  margin-top: 20px;
  margin-bottom:40px;
  padding:0;
  line-height:25px;
  font-weight:600;
  }
`

const ProdutoQuantidade = styled.span`
  color: #333333;
  font-size: 12px;
  margin-left: 24px;
  padding:0;
  }
`

const ProdutoPreco = styled.span`
  color: black;
  font-size: 12px;
  padding:0;
  }
`

const Total = styled.span`
  color: black;
  font-weight: 600;
  font-size: 14px;
  padding:0;
  margin-left:24px;
  }
`