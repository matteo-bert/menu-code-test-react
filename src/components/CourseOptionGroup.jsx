import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import CurrencyContext from './CurrencyContext';
import CourseAction from './CourseActions';

function CourseOptionGroup({ courseCategory }) {
  const currency = useContext(CurrencyContext);
  const courseOptions = useSelector((state) => state.menu[courseCategory]);
  const groupOptions = courseOptions.map((opt) => (
    <ListGroupItem key={`cog-${courseCategory}-${opt.id}`}>
      <Row>
        <Col md="6">{opt.name}</Col>
        <Col md="4" style={{ textAlign: 'right' }}>
          {currency} {opt.price.toFixed(2)}
        </Col>
        <Col md="1" style={{ textAlign: 'right' }}>
          <CourseAction
            courseId={opt.id}
            courseCategory={courseCategory}
            courseName={opt.name}
            coursePrice={opt.price}
          />
        </Col>
      </Row>
    </ListGroupItem>
  ));

  return (
    <>
      <h5 style={{ paddingTop: '15px' }}>{courseCategory.toUpperCase()}</h5>
      <ListGroup id={courseCategory} variant="flush">
        {groupOptions}
      </ListGroup>
    </>
  );
}

CourseOptionGroup.propTypes = {
  courseCategory: PropTypes.string.isRequired,
};

export default CourseOptionGroup;
