import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Person from './props/Person';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Person  name="Billy Joy" age = {45} />
    <Person  name="Bruce Springsteen" age  = {65} />
  </React.StrictMode>
);

