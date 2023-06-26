import { Button, Drawer, Stack, Title} from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import {
  ProductAndCartContainer,
  ProductImageContainer,
  VariantContainer,
  VariantWrapper,
} from "./ShowProduct.styles";
import { CartContext } from "../../context/CartContext";
import NoImage from "../../assets/images/icons8-no-image-100.png";
import OrderList from "../cart/OrderList/OrderList";
import Popup from "../../ui/modals/Popup";

const defaultVariant = {
  bpCatalogNumber: "",
  colorCode: "",
  colorDescription: "",
  grossPrice: "",
  packingCode: "",
  packingDescription: "",
  saleDescription: "",
  variantId: "",
  _id: "",
};
function ShowProduct(props) {
  const { product } = props;
  const { variants } = product;
  const [colors, setColors] = useState([""]);
  const [packaging, setPackaging] = useState([""]);
  const [currentColor, setCurrentColor] = useState("");
  const [currentPackaging, setCurrentPackaging] = useState("");
  const [currentVariant, setCurrentVariant] = useState(defaultVariant);
  const { cartItems, addItemToCart } = useContext(CartContext);
  const [quantity, setQuantiry] = useState(12);
  const [showPopup,setShowPopup] = useState(false)
  const [message, setMessage] = useState('')
  useEffect(() => {
    let allColors = [];
    let allPackaging = [];
    variants.forEach((variant) => {
      allColors.push(variant.colorDescription);
      allPackaging.push(variant.packingDescription);
    });
    allColors = new Set(allColors);
    allPackaging = new Set(allPackaging);
    allColors = Array.from(allColors);
    allPackaging = Array.from(allPackaging);
    setColors([...allColors]);
    setPackaging([...allPackaging]);
    setCurrentColor(allColors[0]);
    setCurrentPackaging(allPackaging[0]);
    return(()=>{
      setColors([])
      setPackaging([])
      setCurrentColor('')
      setCurrentPackaging('')
    })
  }, []);
  useEffect(() => {
    let variant = variants.find(
      (item) =>
        item.colorDescription == currentColor &&
        item.packingDescription == currentPackaging
    );
    if (variant) setCurrentVariant(variant);
    else {
      console.log("variant not found");
      // setCurrentColor(currentVariant.colorDescription)
      // setCurrentPackaging(currentVariant.packingDescription)
    }
  }, [currentColor, currentPackaging]);

  const handleAddClick = (e) => {
    e.preventDefault();
    if ((currentVariant._id = "")) {
      console.log("Invalid Combo");
      return;
    }
    if (quantity < 12 || quantity > 100) {
      setMessage("Invalid quantity. Enter between 12-100")
      setShowPopup(true)
      return;
    }
    console.log("card", cartItems);
    let variant = variants.find(
      (item) =>
        item.colorDescription == currentColor &&
        item.packingDescription == currentPackaging
    );
    if (!variant) {
      setMessage("Invalid combination. Please try again with different color and packaging")
      setShowPopup(true)
      return
    }
    let cartItem = {
      productId: product.productId,
      itemName: product.itemDescription,
      itemcolor: currentColor,
      itemPackaging: currentPackaging,
      quantity: quantity,
      price: currentVariant.grossPrice,
      image: product?.productImages[0] ?? NoImage,
      symbol: product.currency.symbol,
      variantId: variant?.variantId,
      salesDescription:variant?.saleDescription,
      categoryId: product.categoryId,
      subCategoryId: product.subCategoryId,
    };
    addItemToCart(cartItem);
  };
  
  return (
    <Drawer
      opened={props.opened}
      closeOnClickOutside={true}
      closeOnEscape={true}
      onClose={props.onClose}
      position="right"
      size={"60%"}
      padding={0}
      withCloseButton={false}
    >
      <Popup opened={showPopup} onClose={()=>setShowPopup(false)} message={message} />
      <div style={{ padding: "0px 20px" }}>
        {product && (
          <ProductAndCartContainer>
            <Stack style={{ height: "90%", overflow: "auto" }}>
              <Title size={'h4'} style={{ width: "fit-content",marginTop:'30px' }}>
                {product?.itemDescription}
              </Title>
              <ProductImageContainer>
                <img
                  width={"150px"}
                  height={"200px"}
                  src={product?.productImages[0] ?? NoImage}
                />
              </ProductImageContainer>
              <div>{`#`}{currentVariant?.bpCatalogNumber ?? "0000"}</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>{product?.itemDescription}</div>
                <div>
                  {product.currency.symbol} {currentVariant.grossPrice ?? "00"}
                </div>
              </div>
              <h6 style={{ width: "fit-content" }}>
                {currentVariant?.saleDescription ?? "No Description Found"}
              </h6>
              <Title size={'h4'}>Please Select Color</Title>
              <VariantContainer>
                {colors.map((color, index) => {
                  return (
                    <VariantWrapper
                      key={`${color}-${index}`}
                      selected={currentColor == color ? true : false}
                      onClick={() => setCurrentColor(color)}
                    >
                      {color}
                    </VariantWrapper>
                  );
                })}
              </VariantContainer>
              <Title size={'h4'}>Please Select Packaging</Title>
              <VariantContainer>
                {packaging.map((eachPackage, index) => {
                  return (
                    <VariantWrapper
                      key={`${eachPackage}-${index}`}
                      selected={currentPackaging == eachPackage ? true : false}
                      onClick={() => setCurrentPackaging(eachPackage)}
                    >
                      {eachPackage}
                    </VariantWrapper>
                  );
                })}
              </VariantContainer>
              <Title size={'h4'}>Select Quantity</Title>
              <input
                value={quantity}
                onChange={(e) => setQuantiry(parseInt(e.target.value))}
                type="number"
                min={12}
                max={100}
                required
              />
              <Button style={{width:'200px', margin:'0 auto', padding:'10px 5px'}} variant="filled" color='red' onClick={(e) => handleAddClick(e)}>Add Item</Button>
            </Stack>
            <OrderList showDelete={true} customStyle={true} />
          </ProductAndCartContainer>
        )}
      </div>
    </Drawer>
  );
}

export default ShowProduct;
