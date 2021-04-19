//import logo from './logo.svg';
import './App.css';
//import Hello from './components/Hello';
//import FunComponent from './components/FunComponent';
//import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import ExampleClass from './components/ExampleClass';
import Form from './components/Form';
import MyFragment from './components/MyFragment'
import ComponentA from './components/ComponentA'
import Counter from './components/Counter'
import React from 'react';
import CounterHook from './components/CounterHook'

export const MyContext = React.createContext()

function App() {
  return (
    <div className="container">
      {/* <Name/>
      <Example names = {['Python', 'Java', 'JavaScript', 'C#']}/>
      <ExampleClass names = {['Tanvir', 'Tania', 'Riva']}/>
      <Form/>
      <MyFragment/> */}
      {/* <MyContext.Provider value = "This is the value from context">
      <ComponentA/>
      </MyContext.Provider> */}
      <Counter/> 
      <CounterHook/>     
    </div>
  );
}

export default App;
