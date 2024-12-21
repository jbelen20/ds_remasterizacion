import React from 'react'
import { useGetCategoryQuery } from '../../features/apiSlice'
import { Acategory, TitleCategory , ConstentSideBar} from '../../componentsSC/SideBarSC'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons} from '../../componentsSC/NavbarSC'
import { useDispatch} from 'react-redux'
import { addCategory } from '../../features/categorySlice'

const SideBar = () => {
  const dispatch = useDispatch()
  const [ show, setShow ]= useState(false)
  const [wichCategory, setWichCategory] = useState('')
  // console.log(wichCategory)
  const contentSideBar = useRef(null)

  const navigate = useNavigate();
  const visible = ()=>{
    if(show === false){
      contentSideBar.current.style.display = 'none';
    }else if( show === true){
      contentSideBar.current.style.display = 'block';
    }
  } 
  const {data: category} = useGetCategoryQuery()


  return (
    <>
   <Icons
    onClick={()=>{ 
      setShow(true)
      visible()
      if(show === true){
        setShow(false)
      } 
    }}
        fill="red" 
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" />
  </Icons>
  <ConstentSideBar ref={contentSideBar}>
    <TitleCategory>Nuestros Productos</TitleCategory>
      {
        category?.map((aCategory)=>(
          <Acategory 
          onClick={()=> {{
            dispatch(addCategory(aCategory.id_productsCategory))
            setWichCategory(aCategory.id_productsCategory)
            navigate("/products")
          }
          }}
          key={aCategory.id}
          >
            {aCategory.id_productsCategory}
          </Acategory>
        ))
      }
  </ConstentSideBar>
  </>
  )
}

export default SideBar
