import React from 'react';
import { useQuery } from '@apollo/client';

import MenuAPI from '../api/MenuAPI';

function Menu() {
  const { loading, error, data } = useQuery(MenuAPI);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data && data.menu) {
    const { starters, mains, desserts } = data.menu;
    return (
      <>
        <div key="starters">
          <span>STARTERS</span>
          {starters.map(({ name: starterName, price }) => (
            <p key={starterName}>
              {starterName}: {price}
            </p>
          ))}
        </div>
        <div key="main">
          <span>MAIN</span>
          {mains.map(({ name: mainName, price }) => (
            <p key={mainName}>
              {mainName}: {price}
            </p>
          ))}
        </div>
        <div key="desserts">
          <span>DESSERTS</span>
          {desserts.map(({ name: dessertName, price }) => (
            <p key={dessertName}>
              {dessertName}: {price}
            </p>
          ))}
        </div>
      </>
    );
  }
  return <p>No results :(</p>;
}

export default Menu;
