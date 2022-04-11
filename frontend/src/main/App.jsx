import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../template/custom.css'

import Routes from './Routes';
import Menu from '../template/menu';

function App() {

  return (
    <div className="container">
      <Router>
        <Menu/>
        <Routes/>
      </Router>
    </div>
  )
}

export default App
