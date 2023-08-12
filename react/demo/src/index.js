import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GitUserInfo from './ajax/GitUserInfo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <GitUserInfo />
  </React.StrictMode>
);

