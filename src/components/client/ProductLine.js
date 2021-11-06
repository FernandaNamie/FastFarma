
import { Col, Row } from 'react-bootstrap';
import remedio from '../../img/remedio.png';
import styled from 'styled-components';

export default function ProductLine(props) {
    return (
        <div id={props.id} name={props.name} price={props.price} amount={props.amount}>
            < Row >
                <Col md="8">
                    <Row>
                        <Col md="4">
                            <img src={remedio} width="100%" />
                        </Col>
                        <Col md="8">
                            <Product id="name">{props.name}</Product>
                            <Price id="price">R$ {props.price}</Price>
                        </Col>
                    </Row>
                </Col>
                <Col md="4">
                    <ProductAmount id="amount">{props.amount}x</ProductAmount>
                </Col>
                <ProductsDivider />
            </Row >
        </div>
    );
}

const Product = styled.p`
  float: left;
  text-align: left;
  display: inline-block;
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
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