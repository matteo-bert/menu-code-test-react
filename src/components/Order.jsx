/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, Button, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import CurrencyContext from './CurrencyContext';
import OrderList from './OrderList';
import { initOrders } from '../redux/actions/orderAction';
import { errors } from '../utils/labels';

function checkIfHasTwoCourseAndAMain(orders) {
  if (orders && Array.isArray(orders) && orders.length > 1) {
    const mainFiltered = orders.filter((el) => el.category === 'mains');
    if (mainFiltered?.length) return true;
  }
  return false;
}

function Order() {
  const fontStyle = { fontSize: '18px', fontWeight: 'bold' };
  const orders = useSelector((state) => state.orders);
  const currency = useContext(CurrencyContext);
  const [isValid, setIsValid] = useState(false);
  const [validationErrors, setValidationErrors] = useState(new Set());
  const dispatch = useDispatch();

  const submitOrder = useCallback(() => {
    console.log('Order sent to the kitchen, clearing the desk...');
    dispatch(initOrders());
  }, []);

  const logErrorMessage = (vErrors) => {
    const toRender = [];
    for (const entry of vErrors) {
      toRender.push(`${errors[entry]}`);
    }
    return toRender;
  };

  useEffect(() => {
    const orderConstrains = [false, false];
    // Each person must have at least two courses, one of which must be a main.
    const diner1Orders = orders.diner1;
    const diner2Orders = orders.diner2;
    orderConstrains[0] = checkIfHasTwoCourseAndAMain(diner1Orders);
    orderConstrains[1] = checkIfHasTwoCourseAndAMain(diner2Orders);

    setIsValid(!orderConstrains.includes(false));
    if (!isValid) setValidationErrors(validationErrors.add(0));
    else setValidationErrors();
  }, [orders]);

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
        {!isValid && validationErrors?.size ? (
          <Alert key="order-alerts" variant="warning">
            <Alert.Heading>Hey, this order is not ready yet!</Alert.Heading>
            Please have a look at the following issues:
            <br />
            {logErrorMessage(validationErrors)}
          </Alert>
        ) : (
          ''
        )}
      </Row>
      <Row>
        <Button variant={isValid ? 'success' : 'secondary'} disabled={!isValid} onClick={() => submitOrder()}>
          Submit order
        </Button>
      </Row>
    </>
  );
}

export default Order;
