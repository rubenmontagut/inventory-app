import { useEffect, useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedIsLoggedIn = window.localStorage.getItem('isLoggedIn')
    if (storedIsLoggedIn !== null) {
      setIsLoggedIn(storedIsLoggedIn === 'true')
      console.log('Stored isLoggedIn:', storedIsLoggedIn)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  )
}
