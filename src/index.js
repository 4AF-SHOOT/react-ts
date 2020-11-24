import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Test from './components/Test/Test.tsx';

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById('root')
);