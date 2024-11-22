import React from 'react'
import { ContentFormAccount } from '../../componentsSC/CreateAccountSC'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addUser } from '../../features/users/userSlice'
import { useNavigate } from 'react-router-dom'

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
  dispatch(addUser(newUser))
  navigate("/profile")
 }
    

  return (
    <ContentFormAccount>
      <div>
        <h2>formulario creacion de cuenta</h2>
        <form onSubmit={handlerSubmit}>
            <section>
                <label htmlFor='name'>name</label>
                <input
                  name='name' 
                  type='text' 
                  id='name' 
                  placeholder='name'
                  onChange={handlerRecopUser}
                 />
            </section>
            <section>
                <label htmlFor='lastname'>lastname</label>
                <input 
                  name='lastname' 
                  type='text' 
                  id='lastname' 
                  placeholder='lastname'
                  onChange={handlerRecopUser}
                />
            </section>
            <section>
                <label htmlFor='email'>email</label>
                <input 
                  name='email' 
                  type='text' 
                  id='email' 
                  placeholder='email'
                  onChange={handlerRecopUser}
                />
            </section>
            <section>
                <label htmlFor='phone'>phone</label>
                <input 
                  name='phone' 
                  type='text' 
                  id='phone' 
                  placeholder='phone'
                  onChange={handlerRecopUser}
                />
            </section>
            <section>
                <label htmlFor='password'>password</label>
                <input 
                  name='password' 
                  type='password' 
                  id='password' 
                  placeholder='password'
                  onChange={handlerRecopUser}
                />
            </section>
        <button>crear</button>
        </form>
        {error && <p>Todos los campos son obligatorios</p>}
      </div>
    </ContentFormAccount>
  )
}
