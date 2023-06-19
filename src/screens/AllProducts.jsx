import React, { useEffect, useState } from 'react'
import Navigation from '../modules/navigation/navigation.component'
import { CartContainer, ProductContainer, ProductsAndCartContainer, StyledAllProductsContainer } from './AllProducts.styles'
import { getAllCategories } from '../services/getAPIs'
import Categories from '../modules/catgories/categories'
import MainLayout from '../layouts/MainLayout'



function AllProducts() {
  return (
    <>
       <MainLayout>
        <ProductsAndCartContainer>
        <ProductContainer>
        <Categories/>
        </ProductContainer>
        <CartContainer>This is cart</CartContainer>
        </ProductsAndCartContainer>
       </MainLayout>
    </>
  )
}

export default AllProducts