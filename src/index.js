// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a React component

function getTime() {
  return (new Date()).toLocaleTimeString()
}

const App = () => {
  return (
    <div>
      <div>Current Time:</div>
      <h3>{ getTime() }</h3>
    </div>
  )
}

// Take the react component and show it on screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
