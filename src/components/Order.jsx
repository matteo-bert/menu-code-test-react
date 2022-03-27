import React, { useContext } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import CurrencyContext from './CurrencyContext';
import OrderList from './OrderList';

function Order() {
  const fontStyle = { fontSize: '18px', fontWeight: 'bold' };
  const orders = useSelector((state) => state.orders);
  const currency = useContext(CurrencyContext);

  return (
    <>
      <Row className="h-100">
        <Col className="shadow-none p-3 mb-5 bg-light rounded" style={{ textAlign: 'center' }}>
          <h5>Diner 1</h5>
          <OrderList orders={orders.diner1} />
        </Col>
        <Col md="auto" />
        <Col className="shadow-none p-3 mb-5 bg-light rounded" style={{ textAlign: 'center' }}>
          <h5>Diner 2</h5>
          <OrderList orders={orders.diner2} />
        </Col>
      </Row>
      <Row className="shadow-none p-3 mb-3 bg-light rounded">
        <Col>
          <p style={fontStyle}>Total</p>
        </Col>
        <Col>
          <p style={{ ...fontStyle, textAlign: 'right' }}>
            {currency} {orders.total.toFixed(2)}
          </p>
        </Col>
      </Row>
      <Row>
        <Button variant="primary" disabled>
          Submit order
        </Button>
      </Row>
    </>
  );
}

export default Order;
