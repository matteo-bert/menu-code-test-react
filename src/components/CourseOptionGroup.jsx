import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import CurrencyContext from './CurrencyContext';
import CourseAction from './CourseActions';

function CourseOptionGroup({ id }) {
  const currency = useContext(CurrencyContext);
  const courseOptions = useSelector((state) => state.menu[id]);
  const groupOptions = courseOptions.map((opt) => (
    <ListGroupItem key={`cog-${id}-${opt.id}`}>
      <Row>
        <Col md="6">{opt.name}</Col>
        <Col md="4" style={{ textAlign: 'right' }}>
          {currency} {opt.price.toFixed(2)}
        </Col>
        <Col md="1" style={{ textAlign: 'right' }}>
          <CourseAction courseId={opt.id} courseName={opt.name} coursePrice={opt.price} />
        </Col>
      </Row>
    </ListGroupItem>
  ));

  return (
    <>
      <h5 style={{ paddingTop: '15px' }}>{id.toUpperCase()}</h5>
      <ListGroup id={id} variant="flush">
        {groupOptions}
      </ListGroup>
    </>
  );
}

CourseOptionGroup.propTypes = {
  id: PropTypes.string.isRequired,
};

export default CourseOptionGroup;
