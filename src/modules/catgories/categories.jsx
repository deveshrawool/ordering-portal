import React, { useEffect, useState } from "react";
import { getAllCategories, getAllSubCategories } from "../../services/getAPIs";
import {
  CategoriesContainer,
  CategoriesFlexWrapper,
  Category,
  HorizontalLine,
  ProductTitle,
  ProductTitleWrapper,
  SubCategoryConatiner,
} from "./categories.styles";
import NoImage from "../../assets/images/icons8-no-image-100.png";
import { Stack, Button, Loader } from "@mantine/core";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [subProducts, setSubProducts] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    getAllCategories().then((res) => {
      console.log(res);
      setCategories(res?.data?.result);
    });
  }, []);

  function handleCategoryClick(category) {
    setLoader(true);
    setSelectedCategory(category);
    getAllSubCategories(category.categoryId).then((response) => {
      console.log("for catgory", category.categoryId, response.data.result);
      setSubProducts(response?.data?.result);
      setLoader(false)
    });
  }
  return (
    <Stack>
      <CategoriesContainer>
        <h3>Products</h3>
        {categories.map((category) => {
          return (
            <Category
              key={category.categoryId}
              backgroundImage={
                category.categoryImageURL ? category.categoryImageURL : NoImage
              }
              showBorder={
                selectedCategory.categoryId === category.categoryId
                  ? true
                  : false
              }
              onClick={() => handleCategoryClick(category)}
            >
              <ProductTitleWrapper>
                <ProductTitle
                  backgroundColor={
                    category.categoryImageURL ? "transparent" : "#000"
                  }
                >
                  {category.categoryName}
                </ProductTitle>
              </ProductTitleWrapper>
            </Category>
          );
        })}
      </CategoriesContainer>

      <HorizontalLine />
      <SubCategoryConatiner>
        {loader ? <Loader/>:<>
        {subProducts.length ? (
          <>
            {subProducts.map((category) => {
              return (
                <Category
                  key={category.subCategoryId}
                  backgroundImage={
                    category.subCategoryImageURL
                      ? category.subCategoryImageURL
                      : NoImage
                  }
                  //showBorder = {selectedCategory.categoryId === category.categoryId ? true : false}
                  //onClick={()=> handleCategoryClick(category)}
                >
                  <ProductTitleWrapper>
                    <ProductTitle
                      backgroundColor={
                        category.subCategoryImageURL ? "transparent" : "#000"
                      }
                      color='#000'
                    >
                      {category.subCategoryName}
                    </ProductTitle>
                  </ProductTitleWrapper>
                </Category>
              );
            })}
          </>
        ) : (
          <>
            <div> No Products Found</div>
          </>
        )}
        </>}
      </SubCategoryConatiner>
    </Stack>
  );
}

export default Categories;
