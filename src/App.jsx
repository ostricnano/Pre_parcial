import { useState } from 'react'
import Form from './components/Form'
import './App.css'

//let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;


const validateUser = (userName) => {
  const withoutSpaces = userName.trim();
  if(withoutSpaces.length > 3){
    return true;
  } else {
    return false;
  }
}

  // const validatePassword = (password) => {
  //   const withoutSpace = password.trim();
  //   const passwordArray = password.split('');
  //   const hasNumer = (character) => {
  //     if(isNaN(character)){
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //   if (withoutSpace.length > 5 && hasNumer){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // const validateEmail = (email) => {
  //   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  //   if(!regexEmail){
  //     setMessege('Email no es valido');
  //   } 
  // }

function App() {
  const [user, setUser] = useState({})
  const [show, setShow] = useState(false)

  const validateEmail = email => {
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;  
    if (!regexEmail.test(email.value))  {
      alert('email no es valido')
    }
  }

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
    console.log('enviando formulario')
    //const isPasswordValid = validatePassword(password);
    const userValid = validateUser(user.name)
    const validEmail = validateEmail(user.email)
    if(!userValid || !validEmail){
      alert('alguno de los campos no es correcto')
    } else {
      setShow(()=> show ? false : true)
    }
  }

  const handleClick = () =>{
    setUser({})
    setShow(()=> show ? false : true)
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
