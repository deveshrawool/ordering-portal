import React, { useContext, useEffect, useState } from "react";
import Navigation from "../modules/navigation/navigation.component";
import {
  CartContainer,
  NoItemsWrappers,
  ProductContainer,
  ProductsAndCartContainer,
  ProductsRow,
} from "./AllProducts.styles";
import { getProducts } from "../services/getAPIs";
import Categories from "../modules/catgories/categories";
import MainLayout from "../layouts/MainLayout";
import OrderList from "../modules/cart/OrderList/OrderList";
import CartTotal from "../modules/cart/CartTotal";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductsContext";
import { Stack, Text, Title } from "@mantine/core";
import {
  Category,
  ProductTitle,
  ProductTitleWrapper,
} from "../modules/catgories/categories.styles";
import NoImage from "../assets/images/icons8-no-image-100.png";
import { AppContext } from "../context/AppContext";
import InProgress from "../ui/modals/InProgress";

function AllProducts() {
  const { cartItems } = useContext(CartContext);
  const {
    subCategories,
    setAllProducts,
    selectedSubCategory,
    setCurrentSubCategory,
    products,
  } = useContext(ProductContext);
  const{showInProgress, setShowInProgress} = useContext(AppContext)

  function handleSubCategoryClick(subCategories) {
    setCurrentSubCategory(subCategories);
    getProducts(subCategories.subCategoryId).then((response) => {
      setAllProducts(response?.data?.result);
      if (!response?.data?.result.length) {
        // setPopupMessage("No products Found")
        // setShowPopup(true)
      }
      // setLoader(false);
    });
  }
  return (
    <>
      <MainLayout>
        <InProgress opened={showInProgress} onClose={()=>setShowInProgress(false)} />
        <ProductsAndCartContainer>
          <ProductContainer>
            <Categories />
          </ProductContainer>
          <CartContainer>
            {cartItems.length ? (
              <>
                <OrderList showEdit={true}/>
                <CartTotal />
              </>
            ) : (
              <NoItemsWrappers>Items Not Added Yet</NoItemsWrappers>
            )}
          </CartContainer>
        </ProductsAndCartContainer>
      </MainLayout>
      {/* {products.length >0?
        <ProductsRow>
          <>
            {subCategories.map((category) => {
              return (
                <Category
                  key={category.subCategoryId}
                  backgroundImage={
                    category.subCategoryImageURL
                      ? category.subCategoryImageURL
                      : NoImage
                  }
                  showBorder={
                    selectedSubCategory.subCategoryId === category.subCategoryId
                      ? true
                      : false
                  }
                  onClick={() => handleSubCategoryClick(category)}
                >
                  <ProductTitleWrapper>
                    <ProductTitle
                      backgroundColor={
                        category.subCategoryImageURL ? "transparent" : "#000"
                      }
                      color="#000"
                    >
                      {category.subCategoryName}
                    </ProductTitle>
                  </ProductTitleWrapper>
                </Category>
              );
            })}
          </>
        </ProductsRow>
      :<></>} */}
    </>
  );
}

export default AllProducts;
