import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Usedash from './redux/components/dash'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
<Usedash/>
    </div>
  )
}

export default App
