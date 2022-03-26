import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

import Header from './components/Header';
import Menu from './components/Menu';
import Order from './components/Order';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <Container>
      <Row>
        <Col sm>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={4}>
          <Menu />
        </Col>
        <Col xs={12} md={8}>
          <Order />
        </Col>
      </Row>
    </Container>
  );
}

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
