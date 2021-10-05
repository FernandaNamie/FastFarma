import * as React from "react";
import { Box } from "@material-ui/system";
import remedio from "../img/remedio.png";
import { Col, Row } from "react-bootstrap";
import { Delete, ShoppingCartOutlined } from "@material-ui/icons";
import {
  ButtonClose,
  Titulo,
  Cart,
  ButtonDelete,
  ButtonLessCart,
  Estoque,
  Quantidade,
  Price,
  ButtonPlusCart,
  ButtonShopping,
  ProdutoQuantidade,
  ProdutoPreco,
  Total,
  ButtonEnd,
} from "./StyledComponents";

export default function Shopping(props) {
  const pedidos = props.pedidos;

  let total = 0;
  for (let i = 0; i < pedidos.length; i++) {
    total = total + pedidos[i].preco * pedidos[i].quantidade;
  }

  return (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onKeyDown={(e) => {
        props.toggleDrawer(e, false);
      }}
      value={props.value}
    >
      <div>
        <ButtonClose
          value={props.value}
          onClick={(e) => {
            props.toggleDrawer(e, false);
          }}
        >
          x
        </ButtonClose>
      </div>
      <Titulo>Sacola</Titulo>
      {pedidos.map((pedido, idx) => {
        if (pedido.quantidade > 0) {
          return (
            <Cart>
              <Col md="3">
                <img src={remedio} width="70px" />
              </Col>
              <Col>
                <Row>
                  <Col md="9">{pedido.nome}</Col>
                  <ButtonDelete
                    onClick={(e) => {
                      props.handleDelete(e, idx);
                    }}
                  >
                    <Delete />
                  </ButtonDelete>
                </Row>
                <Estoque>Em Estoque</Estoque>
                <Row>
                  <Col md="4">
                    <Price>R${pedido.preco},00</Price>
                  </Col>
                  <Col md="1">
                    <ButtonLessCart
                      onClick={(e) => {
                        props.handleClickLess(e, idx);
                      }}
                    >
                      -
                    </ButtonLessCart>
                  </Col>
                  <Col md="1">
                    <Quantidade>{pedido.quantidade}</Quantidade>
                  </Col>
                  <Col md="1">
                    <ButtonPlusCart
                      onClick={(e) => {
                        props.handleClickPlus(e, idx);
                      }}
                    >
                      +
                    </ButtonPlusCart>
                  </Col>
                  <Col md="1">
                    <ShoppingCartOutlined />
                  </Col>
                </Row>
              </Col>
              <hr />
            </Cart>
          );
        }
      })}
      {pedidos.map((pedido) => {
        if (pedido.quantidade > 0) {
          return (
            <Row>
              <Col md="8">
                <ProdutoQuantidade>
                  {pedido.quantidade} produto(s)
                </ProdutoQuantidade>
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
