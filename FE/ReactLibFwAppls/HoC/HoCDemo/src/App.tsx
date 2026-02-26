import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { NameTags } from './features/names/NameTags';
import { withGreenTheme } from './features/names/GreenNameTag';

const GreenNameTag = withGreenTheme(NameTags);

function App() {
  return (
    <>
      <div>
      <NameTags name="Punith Raj" />
      <GreenNameTag name="Yash" />
    </div>
    </>
  )
}

export default App
