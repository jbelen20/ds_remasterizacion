import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../home/navbar'
import { useGetAnyCategorysQuery } from '../../features/apiSlice'
import { ContentProducts, ContnetCarta, ContentDataInt, TitleElement, ImgC} from '../../componentsSC/ProductsSearchSC'

export default function ProductsSearch() {

const productsCategory = useSelector(state => state.category)
const {data: products} = useGetAnyCategorysQuery(productsCategory.nameCategory);
console.log(products)

return (
  <div>
      <Navbar/>
     
      <ContentProducts>
      {products?.map((element) => (
        <ContnetCarta key={element.name}>
          <ImgC src='https://via.assets.so/img.jpg?w=100&h=100&tc=blue&bg=#cecece'/>
          <TitleElement>{element.name}</TitleElement>
          <ContentDataInt>
            <p >{element.price}</p>
            <p >{element.quantity}</p>
          </ContentDataInt>
        </ContnetCarta>
      ))}
      </ContentProducts>
    </div>
  )
}
