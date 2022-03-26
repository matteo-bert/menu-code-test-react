import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import CurrencyContext from './components/CurrencyContext';
import Header from './components/Header';
import Menu from './components/Menu';
import Order from './components/Order';

import rootReducer from './redux/reducers';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const store = createStore(rootReducer, composeWithDevTools());

const currency = '€';

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
    <Provider store={store}>
      <CurrencyContext.Provider value={currency}>
        <App />
      </CurrencyContext.Provider>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
