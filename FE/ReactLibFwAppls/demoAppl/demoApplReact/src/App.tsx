import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {List } from "./Components/List";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h5>Welcome to demo suite</h5>
      <List></List>
    </>
  )
}

export default App
