import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './admin/components/sidebar.jsx';
import Inquiry from './admin/components/Inquiry.jsx';

function App() {

  return (
    <>
    <div className='flex'>
      <Sidebar/>
      <Inquiry/>
    </div>
    </>
  )
}

export default App
