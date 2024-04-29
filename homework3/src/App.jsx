import { useState } from 'react'
import React from 'react'
import './App.scss'
import Header from './components/Header/Header.jsx'

import OpenButton from './components/OpenButton/OpenButton.jsx'


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <OpenButton />
    </div>
  );
}

export default App
