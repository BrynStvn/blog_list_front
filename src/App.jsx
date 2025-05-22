import { useState } from 'react'

import Login from './components/Login'

const App = () => {
  const [ userNameChange, setUserNameChange ] = useState('')

  const handleInputChange = () => {
    setUserNameChange(userNameChange)
  }
  
  
  return (
    <div>
      <h1>Blog List</h1>
      <Login handleInputChange={handleInputChange}/>
    </div>
  )
}

export default App