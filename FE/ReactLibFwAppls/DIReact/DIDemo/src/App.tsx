import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { UserProvider } from './context/context';
import UserProfile from './Components/userProfile';
import { MockUserService } from './Services/UserService'; 

function App() {
  return (
    <UserProvider service={MockUserService}>
      <UserProfile userId={1} />
    </UserProvider>
  )
}

export default App
