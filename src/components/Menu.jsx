import React from 'react';
import { useQuery } from '@apollo/client';
import { Alert } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import MenuAPI from '../api/MenuAPI';
import CourseOptionGroup from './CourseOptionGroup';
import { initMenu } from '../redux/actions/menuAction';

function Menu() {
  const { loading, error, data } = useQuery(MenuAPI);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) {
    const errorAlert = (
      <Alert variant="danger">
        <Alert.Heading>Oops, something went wrong...</Alert.Heading>
        <p>Error while fetching the menu. Try again and contact the OpenTable support if error persists.</p>
      </Alert>
    );
    return errorAlert;
  }

  const { starters, mains, desserts } = data.menu;
  dispatch(initMenu({ starters, mains, desserts }));

  return (
    <div>
      <CourseOptionGroup id="starters" />
      <CourseOptionGroup id="mains" />
      <CourseOptionGroup id="desserts" />
    </div>
  );
}

export default Menu;
