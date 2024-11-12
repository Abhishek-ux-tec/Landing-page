import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './pages/Landing'
import Header from './assets/components/Header'
import Footer from './assets/components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Landing />
    <Footer />

          
    </>
  )
}

export default App
