import React, { useState } from 'react';
import { Dropdown, DropdownButton, OverlayTrigger, Tooltip } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { addToOrder } from '../redux/actions/orderAction';
import { errors } from '../utils/labels';

function CourseActions({ courseId, courseCategory, courseName, coursePrice }) {
  const dispatch = useDispatch();
  const [disableBtn, setDisableBtn] = useState(false);
  const [disableBtn1, setDisableBtn1] = useState(false);
  const [disableBtn2, setDisableBtn2] = useState(false);

  const addOrderToDiner = (dinerId, category, crsId, crsName, crsPrice) => {
    dispatch(addToOrder(dinerId, category, crsId, crsName, crsPrice));
    if (dinerId === 'diner1') setDisableBtn1(true);
    else setDisableBtn2(true);
    if (category === 'desserts' && courseName === 'Cheesecake') {
      setDisableBtn(true);
    }
  };

  const generateOverlayBtn = (body) => (
    // There is only one piece of cheesecake left.
    <OverlayTrigger
      overlay={<Tooltip id={`tooltip-cheesecake-disabled-${courseId}-${courseCategory}`}>{errors[2]}</Tooltip>}
    >
      <span className="d-inline-block">{body}</span>
    </OverlayTrigger>
  );

  const generateOverlayItm = (body) => (
    // Each diner cannot have more than one of the same course.
    <OverlayTrigger
      overlay={<Tooltip id={`tooltip-same-course-disabled-${courseId}-${courseCategory}`}>{errors[1]}</Tooltip>}
    >
      <span className="d-inline-block">{body}</span>
    </OverlayTrigger>
  );

  const addToDiner1DropdownItm = (
    <Dropdown.Item
      disabled={disableBtn1}
      onClick={() => addOrderToDiner('diner1', courseCategory, courseId, courseName, coursePrice)}
    >
      Add to Diner 1
    </Dropdown.Item>
  );

  const addToDiner2DropdownItm = (
    <Dropdown.Item
      disabled={disableBtn2}
      onClick={() => addOrderToDiner('diner2', courseCategory, courseId, courseName, coursePrice)}
    >
      Add to Diner 2
    </Dropdown.Item>
  );

  const dropdownBtn = (
    <DropdownButton variant="primary" title="" disabled={disableBtn}>
      {disableBtn1 ? generateOverlayItm(addToDiner1DropdownItm) : addToDiner1DropdownItm}
      {disableBtn2 ? generateOverlayItm(addToDiner2DropdownItm) : addToDiner2DropdownItm}
    </DropdownButton>
  );

  return disableBtn ? generateOverlayBtn(dropdownBtn) : dropdownBtn;
}

CourseActions.propTypes = {
  courseId: PropTypes.string.isRequired,
  courseCategory: PropTypes.string.isRequired,
  courseName: PropTypes.string.isRequired,
  coursePrice: PropTypes.number.isRequired,
};

export default CourseActions;
