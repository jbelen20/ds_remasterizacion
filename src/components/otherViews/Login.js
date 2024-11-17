import React from 'react'
import Navbar from '../home/navbar'
import { ContainProfileLogin,
         HaveInputs,
         ProfileIcon,
         InputLogin,
         CreateAccount,
         ButtonLogin
} from '../../componentsSC/LoginSC'
import { useState } from 'react'




export default function Login({ setUser }) {
  
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

//console.log(emailOrPhone, password)

  const handlerSubmit = (e)=>{
    e.preventDefault()
    if(emailOrPhone === "" || password === ""){
      setError(true)
      return
    }
    setError(false)
    setUser([emailOrPhone])
  }



  return (
  <>
    <Navbar/>
    <ContainProfileLogin>
      <ProfileIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
      </ProfileIcon>
      <form
        onSubmit={handlerSubmit}
      >
        <HaveInputs>
          <InputLogin 
            type="text" 
            placeholder="Emial or Phone"
            value={emailOrPhone}
            onChange={e => setEmailOrPhone(e.target.value)}
          />
          <InputLogin 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </HaveInputs>
        <CreateAccount>No tienes una cuenta aun?</CreateAccount>
        <ButtonLogin>LOGIN</ButtonLogin>
      </form>
      {error && <p>Todos los campos son obligatorios</p>}
    </ContainProfileLogin>
  </>
  )
}
