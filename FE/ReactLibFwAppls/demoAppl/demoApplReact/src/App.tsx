import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Page1 } from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";

import {List } from "./Components/List";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <h5>Welcome to demo suite</h5>
      <List></List>
      <Routes>
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
      </Router>
    </>
  )
}

export default App
