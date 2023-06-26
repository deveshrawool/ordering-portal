import React, { useContext, useState } from "react";
import {
  Category,
  ProductTitle,
  ProductTitleWrapper,
} from "../categories.styles";
import { ProductContext } from "../../../context/ProductsContext";
import { getProducts } from "../../../services/getAPIs";
import NoImage from "../../../assets/images/icons8-no-image-100.png";
import Popup from "../../../ui/modals/Popup";

function SubCategories() {
  const {
    subCategories,
    setCurrentSubCategory,
    setAllProducts,
    selectedSubCategory,
  } = useContext(ProductContext);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  function handleSubCategoryClick(subCategories) {
    setCurrentSubCategory(subCategories);
    //setLoader(true);
    getProducts(subCategories.subCategoryId).then((response) => {
      setAllProducts(response?.data?.result);
      if (!response?.data?.result.length) {
        setPopupMessage("No products Found");
        setShowPopup(true);
      }
      //setLoader(false);
    });
  }
  return (
    <>
      <Popup
        opened={showPopup}
        onClose={() => setShowPopup(false)}
        message={popupMessage}
      />
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
  );
}

export default SubCategories;
