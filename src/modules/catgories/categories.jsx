import React, { useContext, useEffect, useState } from "react";
import { getAllCategories, getAllSubCategories } from "../../services/getAPIs";
import {
  CategoriesContainer,
  Category,
  HorizontalLine,
  ProductTitle,
  ProductTitleWrapper,
  SubCategoryConatiner,
} from "./categories.styles";
import NoImage from "../../assets/images/icons8-no-image-100.png";
import { Stack, Loader, Title, TextInput } from "@mantine/core";
import Popup from "../../ui/modals/Popup";
import { ProductContext } from "../../context/ProductsContext";
import SubCategories from "./subcategories/SubCategories";
import Products from "./products/Products";
import { ReactComponent as SearchIcon } from "../../assets/svgs/search.svg";
import { AppContext } from "../../context/AppContext";

function Categories() {
  const [loader, setLoader] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const { setShowInProgress } = useContext(AppContext);
  const {
    products,
    subCategories,
    setAllSubCategories,
    categories,
    setCategories,
    setSelectedCategory,
    selectedCategory,
  } = useContext(ProductContext);
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
      setAllSubCategories(response?.data?.result);
      setLoader(false);
    });
  }
  return (
    <Stack>
      <Popup
        opened={showPopup}
        onClose={() => setShowPopup(false)}
        message={popupMessage}
      />

      {products.length > 0 ? (
        <Products />
      ) : (
        <>
        <div style={{ display: "flex", alignItems: "center" }}>
              <Title
                style={{ marginLeft: "5px", marginRight: "auto" }}
                size={"h3"}
              >
                Printer Heads
              </Title>
              <div
                style={{ width: "25%" }}
                onClick={() => setShowInProgress(true)}
              >
                <TextInput
                  icon={<SearchIcon width={"20px"} height={"20px"} />}
                  type="search"
                  disabled={true}
                  placeholder="Search"
                  style={{
                    width: "100%",
                  }}
                />
              </div>
              <div
                style={{ marginLeft: "15px" }}
                onClick={() => setShowInProgress(true)}
              >
                Filters
              </div>
            </div>
          <CategoriesContainer>
            {categories.map((category) => {
              return (
                <Category
                  key={category.categoryId}
                  backgroundImage={
                    category.categoryImageURL
                      ? category.categoryImageURL
                      : NoImage
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
            {loader ? (
              <Loader />
            ) : (
              <>
                {subCategories.length ? (
                  <SubCategories />
                ) : (
                  <div> No Sub category Found</div>
                )}
              </>
            )}
          </SubCategoryConatiner>
        </>
      )}
    </Stack>
  );
}

export default Categories;
