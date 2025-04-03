import { useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4'>
    <div className='text-center mb-8'>
      <h1 className='text-5xl font-bold text-gray-800'>AI Image Enhancer</h1>
      <p className='text-lg text-gray-500'>Upload your image and let AI enhance to in seconds!</p>
    </div>
    <Home/>
    <div className='text-sm text-gray-500 mt-5'>
      <p>Powered By @niranjansd</p>
    </div>
   </div>
        
  )
}

export default App

//In these project i build AI-powered image enhancer using react. This project leverages AI to improve image qulity,upscale resolution and enhance details effortlessly.