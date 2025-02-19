import React from 'react'
import { ContentFormAccount,
        RegistrationTitle,
        Fields,
        ButtonCreateAccount,
} from '../../componentsSC/CreateAccountSC'
import { AlertError } from '../../componentsSC/LoginSC'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4} from 'uuid'
import Navbar from '../home/navbar'
import { usePostRegisterMutation} from '../../features/apiSlice';

export default function CreateAccount() {

const [registerUser, { isError, error, isSuccess }] = usePostRegisterMutation();
const [errorx, setErrorx] = useState(false)

const navigate = useNavigate();

 const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    lastname:'',
    email: '',
    phone: '',
    password: ''
 })


 const handlerRecopUser = (e)=>{
  setNewUser({
    ...newUser,
    id: v4(),
    [e.target.name]: e.target.value,
  })
}



const handlerSubmit = async(event)=>{
  event.preventDefault()
  if(newUser.id === "" || newUser.name === "" || newUser.lastname === "" || newUser.email === "" || newUser.phone === "" || newUser.password === "" ){
    setErrorx(true)
    return
  }
  setErrorx(false)
  try {
    await registerUser(newUser).unwrap();
    alert('Registration successful!');
  } catch (err) {
    console.error('Failed to register:', err);
  }
  navigate(`/profile/1`);
  // console.log(newUser)
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
            {isError && <p style={{ color: 'red' }}>{error?.data?.message || 'Error occurred'}</p>}
            {isSuccess && <p style={{ color: 'green' }}>Registration successful!</p>}
            {errorx && <AlertError>¡Todos los campos son obligatorios!</AlertError>}
        <ButtonCreateAccount>Crear cuenta</ButtonCreateAccount>
        </form>
      </div>
    </ContentFormAccount>
    </>
  )
}
