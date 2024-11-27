import React from 'react'
import { ContentFormAccount,
        RegistrationTitle,
        Fields,
        ButtonCreateAccount,
} from '../../componentsSC/CreateAccountSC'
import { AlertError } from '../../componentsSC/LoginSC'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../features/users/userSlice'
import { useNavigate } from 'react-router-dom'
import {v4} from 'uuid'
import Navbar from '../home/navbar'

export default function CreateAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

 const [newUser, setNewUser] = useState({
    name: '',
    lastname:'',
    email: '',
    phone: '',
    password: ''
 })

 const [error, setError] = useState(false)

 const handlerRecopUser = (e)=>{
  setNewUser({
    ...newUser,
    [e.target.name]: e.target.value,
  })
}

const handlerSubmit = (event)=>{
  event.preventDefault()
  if(newUser.name === "" || newUser.lastname === "" || newUser.email === "" || newUser.phone === "" || newUser.password === "" ){
    setError(true)
    return
  }
  setError(false)
  console.log(newUser)
  dispatch(addUser({
    ...newUser,
    id: v4()
  }))
  navigate("/profile")
 }
    

  return (
    <>
    <Navbar/>
    <ContentFormAccount>
      <div>
        <RegistrationTitle>Registrate!</RegistrationTitle>
        <form onSubmit={handlerSubmit}>
            <Fields>
                <label htmlFor='name'>name</label>
                <input
                  name='name' 
                  type='text' 
                  id='name' 
                  placeholder='name'
                  onChange={handlerRecopUser}
                 />
            </Fields>
            <Fields>
                <label htmlFor='lastname'>lastname</label>
                <input 
                  name='lastname' 
                  type='text' 
                  id='lastname' 
                  placeholder='lastname'
                  onChange={handlerRecopUser}
                />
            </Fields>
            <Fields>
                <label htmlFor='email'>email</label>
                <input 
                  name='email' 
                  type='text' 
                  id='email' 
                  placeholder='email'
                  onChange={handlerRecopUser}
                />
            </Fields>
            <Fields>
                <label htmlFor='phone'>phone</label>
                <input 
                  name='phone' 
                  type='text' 
                  id='phone' 
                  placeholder='phone'
                  onChange={handlerRecopUser}
                />
            </Fields>
            <Fields>
                <label htmlFor='password'>password</label>
                <input 
                  name='password' 
                  type='password' 
                  id='password' 
                  placeholder='password'
                  onChange={handlerRecopUser}
                />
            </Fields>
        {error && <AlertError>¡Todos los campos son obligatorios!</AlertError>}
        <ButtonCreateAccount>Crear cuenta</ButtonCreateAccount>
        </form>
      </div>
    </ContentFormAccount>
    </>
  )
}
