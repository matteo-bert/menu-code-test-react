import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

import CurrencyContext from './CurrencyContext';
import CourseAction from './CourseActions';

function CourseOptionGroup({ title, options }) {
  const currency = useContext(CurrencyContext);
  const groupOptions = options.map((opt) => (
    <ListGroupItem key={`cog-${title}-${opt.id}`}>
      <Row>
        <Col md="6">{opt.name}</Col>
        <Col md="4" style={{ textAlign: 'right' }}>
          {currency} {opt.price.toFixed(2)}
        </Col>
        <Col md="1" style={{ textAlign: 'right' }}>
          <CourseAction courseId={opt.id} />
        </Col>
      </Row>
    </ListGroupItem>
  ));

  return (
    <>
      <h5 style={{ paddingTop: '15px' }}>{title}</h5>
      <ListGroup id={title} variant="flush">
        {groupOptions}
      </ListGroup>
    </>
  );
}

CourseOptionGroup.defaultProps = {
  options: [],
};

CourseOptionGroup.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ),
};

export default CourseOptionGroup;
