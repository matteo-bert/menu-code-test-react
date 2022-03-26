import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import PropTypes from 'prop-types';

function CourseActions({ courseId }) {
  return (
    <DropdownButton variant="primary" title="">
      <Dropdown.Item onClick={() => console.log('Adding to Diner 1: ', courseId)}>Add to Diner 1</Dropdown.Item>
      <Dropdown.Item onClick={() => console.log('Adding to Diner 2: ', courseId)}>Add to Diner 2</Dropdown.Item>
    </DropdownButton>
  );
}

CourseActions.propTypes = {
  courseId: PropTypes.string.isRequired,
};

export default CourseActions;
