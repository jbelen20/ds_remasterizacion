import React from 'react'
import { useGetCategoryQuery } from '../../features/apiSlice'
import { Acategory, TitleCategory , ConstentSideBar} from '../../componentsSC/SideBarSC'
import { useRef, useState } from 'react'
import { Icons} from '../../componentsSC/NavbarSC'

const SideBar = () => {
  const [ show, setShow ]= useState(false)
  console.log(show)
  const contentSideBar = useRef(null)

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
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
        <path d="M4 6H20M4 12H20M4 18H20" stroke="#fff" />
  </Icons>
  <ConstentSideBar ref={contentSideBar}>
    <TitleCategory>Nuestros Productos</TitleCategory>
      {
        category?.map((aCategory)=>(
          <Acategory key={aCategory.id}>{aCategory.id_productsCategory}</Acategory>
        ))
      }
  </ConstentSideBar>
  </>
  )
}

export default SideBar
