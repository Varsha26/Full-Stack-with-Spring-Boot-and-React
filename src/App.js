import React from 'react';
import './App.css';
import './bootstrap.css';
import Counter from "./components/counter/Counter";
import WelcomePage from './components/react-spring-boot/WelcomePage';

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <WelcomePage />
    </div>
  );
}

export default App;
