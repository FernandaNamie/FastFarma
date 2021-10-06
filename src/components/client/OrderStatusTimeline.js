import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

export default function OrderStatusTimeLine() {
    return (
        <div>
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
        </div>
    );
}

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