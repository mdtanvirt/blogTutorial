import logo from './logo.svg';
import './App.css';
import React from 'react';

export const MyContext = React.createContext()

function App() {
  return (
    <div className="container">
      <h1>Hello React</h1>     
    </div>
  );
}

export default App;
