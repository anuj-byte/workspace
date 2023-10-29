import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import TodoComponent from './components/Todo.js';
const data=[
  {
    title:"anol",
    text:"hey how are you"

  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <TodoComponent data={data}></TodoComponent>
  
);


