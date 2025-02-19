import { useSelector} from 'react-redux'
import Navbar from '../home/navbar'
import {ProfileIcon} from '../../componentsSC/LoginSC'
import { TitleFavorites, UserName } from '../../componentsSC/ProfileSC'
import {  useGetAUserQuery} from '../../features/apiSlice'
// import { useLocalStorage } from '../../useLocalStorage'



export default function Profile() {
  
  const getId = useSelector(state => state.users.idState)
  const id = getId[0]
  const {data: user} = useGetAUserQuery(id);
  


  return (
    <div>
      <Navbar />
      <ProfileIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
      </ProfileIcon>
      <UserName>{user?.name} {user?.lastname}</UserName>
      <UserName>{user?.email}</UserName>
      
      {/* <p>all users</p>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))} */}

      <TitleFavorites>tus favoritos:</TitleFavorites>
    </div>
  )
}
