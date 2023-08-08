import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CourseList from './pc/CourseList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CourseList />
  </React.StrictMode>
);

