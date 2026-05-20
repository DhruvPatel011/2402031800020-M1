/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
*/

import rct from './assets/react.svg';
import Hello from './Hello';
import Bye from './bye';
import './App.css';

function App() {
  return (
    <>
      <h3 >It's inside <code>App.tsx</code> File... !</h3>
      <Hello />
      <img src={rct} height="200px"  alt="React Img" />
      <Bye />
    </>
  );
}

export default App;
