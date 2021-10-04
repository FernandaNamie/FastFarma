import NavBar from './navbar'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import remedio from './remedio.png';

export default function Home() {
  return (
    <div>
      <NavBar />
      <GlobalStyle />
      <Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Col md="8">
            <Rectangle>
              <Status>Pedido confirmado!</Status>
              <OrderInformation>#A821AJKSD90</OrderInformation>
              <OrderInformation>Previsão de entrega: 12h50 - 13h00</OrderInformation>
              <DivLine>
              </DivLine>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Col md="6">
                  <Row>
                    <Col><Point /></Col>
                    <Col><Point /></Col>
                    <Col><Point /></Col>
                    <Col><Point /></Col>
                  </Row>
                  <Line />
                  <Row>
                    <Col>
                      <StatusInformation>Realizado</StatusInformation>
                    </Col>
                    <Col>
                      <StatusInformation>Confirmado</StatusInformation>
                    </Col>
                    <Col>
                      <StatusInformation>A caminho</StatusInformation>
                    </Col>
                    <Col>
                      <StatusInformation>Entregue</StatusInformation>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="8">
                      <Details>Detalhes do Pedido</Details>
                    </Col>
                    <Col md="4">
                      <Amount>Quantidade</Amount>
                    </Col>
                  </Row>
                  {/* inicio linha de produto */}
                  <Row>
                    <Col md="8">
                      <Row>
                        <Col md="4">
                          <img src={remedio} width="100%" />
                        </Col>
                        <Col md="8">
                          <Product>Spray de Tantum Verde para aplicação tópica, 30ml</Product>
                          <Price>R$50,00</Price>
                        </Col>
                      </Row>
                    </Col>
                    <Col md="4">
                      <ProductAmount>1x</ProductAmount>
                    </Col>
                    <ProductsDivider />
                  </Row>
                  {/* fim linha de produto */}
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
                          <Price>R$56,00</Price>
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

const Status = styled.h2`
  display: inline-block;
  width: 100%;
  color: #37B9C5;
  font-family: 'Manrope', sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  }
`
const OrderInformation = styled.p`
  display: inline-block;
  width: 100%;
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 3px;
  }
`

const Point = styled.span`
  height: 20px;
  width: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  }
`
const Line = styled.span`
  height: 1px;
  width: 80%;
  background-color: #bbb;
  display: inline-block;
  position: relative;
  top: -32px;
  }
`

const StatusInformation = styled.p`
  display: inline-block;
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: bold;
  }
`

const DivLine = styled.span`
  display: inline-block;
  width: 100%;
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
const ProductAmount = styled.p`
  display: inline-block;
  font-family: 'Manrope', sans-serif;
  font-size: 14px;
  margin: 3px;
  }
`
const Product = styled.p`
  text-align: left;
  display: inline-block;
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
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

const ProductsDivider = styled.span`
  height: 1px;
  width: 100%;
  opacity: 0.5;
  background-color: #bbb;
  display: inline-block;
  position: relative;
  margin-top: 5px;
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