import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import confirmed from "../../img/confirmado.png"

export default function OrderStatusHeader(props) {
    return (
        <div>
            <Row>
                <Col md="4">
                    <Image>
                        <img src={confirmed} width="45px" />
                    </Image>
                </Col>
                <Col md="8">
                    <Row><Status>Pedido confirmado!</Status></Row>
                    <Row><OrderInformation>#A821AJKSD90</OrderInformation></Row>
                    <Row><OrderInformation>Previsão de entrega: 12h50 - 13h00</OrderInformation></Row>
                </Col>
            </Row>
            <DivLine>
            </DivLine>
        </div>
    );
}
const Image = styled.span`
  float: right;
  margin-top: 25px;
`

const Status = styled.h2`
  text-align: left;
  display: inline-block;
  color: #37B9C5;
  font-family: 'Manrope', sans-serif;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 3px;
  }
`
const OrderInformation = styled.p`
text-align: left;
  display: inline-block;
  color: black;
  font-family: 'Manrope', sans-serif;
  font-size: 12px;
  font-weight: bold;
  margin: 3px;
  }
`
const DivLine = styled.span`
  display: inline-block;
  width: 100%;
  }
`