import NavBar from '../../components/NavBar.js'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductLine from '../../components/client/ProductLine.js';
import { pedido } from "../../mockData/pedido";
import OrderStatusHeader from '../../components/client/OrderStatusHeader.js';
import OrderStatusTimeLine from '../../components/client/OrderStatusTimeline.js';

export default function OrderStatus() {
  let total = 0;
  for (let i = 0; i < pedido.length; i++) {
    total = total + pedido[i].price * pedido[i].amount;
  }
  return (
    <div>
      <NavBar />
      <GlobalStyle />
      <Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Col md="8">
            <Rectangle>
              <OrderStatusHeader />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Col md="6">
                  <OrderStatusTimeLine />
                  <Row>
                    <Col md="8">
                      <Details>Detalhes do Pedido</Details>
                    </Col>
                    <Col md="4">
                      <Amount>Quantidade</Amount>
                    </Col>
                  </Row>
                  {pedido.map((item, idx) => {
                    return (
                      <ProductLine
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                      />
                    );
                  })}
                  <Row>
                    <Col md="8">
                      <Row>
                        <Col md="4">
                          Frete:
                        </Col>
                        <Col md="8">
                          <Price>R$6,00</Price>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="4">
                          Total:
                        </Col>
                        <Col md="8">
                          <Price>R${total + 6},00</Price>
                        </Col>
                      </Row>
                    </Col>
                  </Row>

                </Col>
              </div>
              <NavigationButton>Voltar a navegar</NavigationButton>
            </Rectangle>
          </Col>
        </div>
      </Row>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
  }
`
const Rectangle = styled.button`
  display: inline-block;
  background-color: #F8F9FB; 
  border: 0;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  font-size: 15px;
  margin-top: 40px;
  }
`

const Details = styled.p`
  display: inline-block;
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 3px;
  }
`

const Amount = styled.p`
  display: inline-block;
  color: #37B9C5;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 3px;
  }
`

const Price = styled.p`
  width: 100%;
  text-align: left;
  display: inline-block;
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: bold;
  margin: 3px;
  }
`

const NavigationButton = styled.button`
  display: inline-block;
  background-color: #37B9C5; 
  color: white;
  border: 0;
  border-radius: 20px;
  width: 180px;
  height: 40px;
  font-size: 15px;
  cursor: pointer;
  margin-top: 40px;
  }
`