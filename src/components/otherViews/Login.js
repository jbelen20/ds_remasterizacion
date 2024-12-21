import React from 'react'
import Navbar from '../home/navbar'
import { ContainProfileLogin,
         HaveInputs,
         ProfileIcon,
         InputLogin,
         CreateAccount,
         ButtonLogin,
         AlertError
} from '../../componentsSC/LoginSC'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useGetAllUserQuery } from '../../features/apiSlice'
import { useDispatch } from 'react-redux'
import { getId } from '../../features/users/userSlice'


export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [emailOrPhone, setEmailOrPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  
  const id = []
  const {data: allUsers} = useGetAllUserQuery()
  const readAllusers = ()=>{allUsers?.map((element) => {
    if(element.email !== emailOrPhone ){
      return console.log('no se encontro el usuario')
    }
      id.push(element.id)
      console.log(id)
      return element.email
    })}
    
    
    const handlerSubmit = (e)=>{
      e.preventDefault()
      if(emailOrPhone === "" || password === ""){
        setError(true)
        return
      }
      setError(false)
      // console.log({'name':emailOrPhone, 'password':password })
      if(id !== ''){
        navigate(`/profile/${id}`);
        console.log(id)
        dispatch(getId(id))
    }
  }


  return (
  <>
    <Navbar/>
    <ContainProfileLogin>
      <ProfileIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
      </ProfileIcon>
      <form>
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
      {error && <AlertError>¡Todos los campos son obligatorios!</AlertError>}
        <Link to='/createaccount'>
          <CreateAccount>No tienes una cuenta aun?</CreateAccount>
        </Link>
     <div onClick={readAllusers()}>
        <ButtonLogin onClick={handlerSubmit} >LOGIN</ButtonLogin>
     </div>
  
      </form>
    </ContainProfileLogin>
  </>
  )
}
