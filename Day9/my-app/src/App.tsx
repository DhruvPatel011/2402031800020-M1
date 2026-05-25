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
import Count from './Counter';
import './App.css';


function App() {

    const hobbies=["Coding","Traveling","Cooking"]
/*
  const mess = true;
    if(mess){
      return <Hello />
    }else{
      return <Bye />
    }
*/

  return (
    <>
      <h3 >It's inside <code>App.tsx</code> File... !</h3>
      <Hello name10="dhruv" age={20} city="Ahemdabad" hobbies={hobbies}/>
      <img src={rct} height="200px"  alt="React Img" />
      <br /><br />
      <Count />
      <br /><br />
      <Bye />
      <br />
    </>
  );
}

export default App;


