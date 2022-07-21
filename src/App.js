import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import configureStore from './redux/configureStore';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
        <Route path="/hello" element={<h1>Hello Path</h1>} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
