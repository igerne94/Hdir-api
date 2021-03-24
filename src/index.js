import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const mysecondelement = (
<ul>
  <h1>Put your request here:</h1>
  <textarea for="inputId" id="inputId" placeholder="yes, here..."></textarea>
  <button onclick="activateLasers()">Send the request</button>
</ul>
);

//const myfirstelement = <button onclick="activateLasers()">Send</button>


ReactDOM.render(
  mysecondelement, document.getElementById('root')
  );

/*
ReactDOM.render(
  const mysecondelement = <h1>Send</h1>;
, document.getElementById('root')
  );*/

  /*<React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
