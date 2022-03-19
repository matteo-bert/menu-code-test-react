import React from "react";
import { render } from "react-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache()
});

function Menu() {
  const { loading, error, data } = useQuery(gql`
    {
      menu {
        starters {
          id,
          name,
          price
        }
        mains {
          id,
          name,
          price
        }
        desserts {
          id,
          name,
          price
        }
      }
    }
  `);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  if (data && data.menu) {
    const { starters, mains, desserts } = data.menu;
    return (
      <>
        <div key='starters'>
          <span>STARTERS</span>
          {starters.map(({ name: starterName, price }) => (
            <p key={starterName}>{starterName}: {price}</p>
          ))}
        </div>
        <div key='main'>
            <span>MAIN</span>
            {mains.map(({ name: mainName, price }) => (
              <p key={mainName}>{mainName}: {price}</p>
            ))}
          </div>
          <div key='desserts'>
            <span>DESSERTS</span>
            {desserts.map(({ name: dessertName, price }) => (
              <p key={dessertName}>{dessertName}: {price}</p>
            ))}
          </div>
      </>
      );
  }
  return 'No results :(';
}

function App() {
  return (
    <div>
      <h2>Menu Test</h2>
      <Menu />
    </div>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
