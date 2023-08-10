import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quotes from './state/Quotes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <Quotes />
  </React.StrictMode>
);

