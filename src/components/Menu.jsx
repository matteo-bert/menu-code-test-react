import React from 'react';
import { useQuery } from '@apollo/client';

import MenuAPI from '../api/MenuAPI';
import CourseOptionGroup from './CourseOptionGroup';

function Menu() {
  const { loading, error, data } = useQuery(MenuAPI);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data && data.menu) {
    const { starters, mains, desserts } = data.menu;

    return (
      <>
        <CourseOptionGroup title="Starters" options={starters} />
        <CourseOptionGroup title="Mains" options={mains} />
        <CourseOptionGroup title="Desserts" options={desserts} />
      </>
    );
  }
  return <p>Kitchen is closed</p>;
}

export default Menu;
