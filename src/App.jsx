import { useState } from 'react'
import Form from './components/Form'
import './App.css'

function App() {
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false)


  const handleChange = ({ target }) =>{
    const {name, value} = target;
    setUser((prev) =>({
      ...prev,
      id: Date.now(),
      [name]: value
    }))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setShow(()=> show ? false : true)
  }

  const handleClick = () =>{
    setUser({})
  }

  return (
    <div className='container'>
      <Form
        handleChange={handleChange}  
        handleSubmit={handleSubmit}
        handleClick={handleClick}
        user={user}
        show={show}
      />
    </div>
  )
}

export default App
