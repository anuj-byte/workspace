import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import FunctionalComponent from './components/FunctionalComponent';
import TodoComponent from './components/Todo.js';
const data=[
  {
    title:"anol",
    text:"hey how are you"

  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <FunctionalComponent prop1="usestate eg"></FunctionalComponent>
  
);


