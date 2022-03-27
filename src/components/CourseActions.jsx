import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToOrder } from '../redux/actions/orderAction';

function CourseActions({ courseId, courseCategory, courseName, coursePrice }) {
  const dispatch = useDispatch();

  return (
    <DropdownButton variant="primary" title="">
      <Dropdown.Item onClick={() => dispatch(addToOrder('diner1', courseCategory, courseId, courseName, coursePrice))}>
        Add to Diner 1
      </Dropdown.Item>
      <Dropdown.Item onClick={() => dispatch(addToOrder('diner2', courseCategory, courseId, courseName, coursePrice))}>
        Add to Diner 2
      </Dropdown.Item>
    </DropdownButton>
  );
}

CourseActions.propTypes = {
  courseId: PropTypes.string.isRequired,
  courseCategory: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  coursePrice: PropTypes.number.isRequired,
};

export default CourseActions;
