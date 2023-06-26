import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button, Stack, Table, Title } from "@mantine/core";
import {
  Description,
  ProductContainer,
  ProductNameAndDetailsWrapper,
  TitleAndEditWrapper,
} from "./OrderList.styles";
import { ProductContext } from "../../../context/ProductsContext";
let specialStyle = {
  height: "90%",
  overflow: "auto",
};
function OrderList({
  showDelete = false,
  showEdit = false,
  customStyle = false,
}) {
  const { cartItems, clearItemFromCart, handleCartItemClick } =
    useContext(CartContext);
  const { setShowProduct, setProduct } = useContext(ProductContext);

  const handleDelete = (e, item) => {
    e.stopPropogation();
    clearItemFromCart(item);
  };
  const rows = cartItems.map((item, index) => (
    <tr key={item.itemName + index}>
      <ProductContainer onClick={() => showDelete && handleCartItemClick(item)}>
        <img src={item.image} width={"25px"} height={"25px"} alt="noImg" />{" "}
        <ProductNameAndDetailsWrapper>
          <div>{item.itemName}</div>
          <Description>{item.salesDescription}</Description>
        </ProductNameAndDetailsWrapper>
      </ProductContainer>
      <td>{item.quantity}</td>
      <td>
        {item.symbol} {item.price}
      </td>
      {showDelete && (
        <td
          style={{ cursor: "pointer" }}
          onClick={(e) => handleDelete(e, item)}
        >
          X
        </td>
      )}
    </tr>
  ));
  function handleCloseButtonClick() {
    setShowProduct(false);
    setProduct({});
  }
  return (
    <Stack style={customStyle ? specialStyle : {}}>
      <TitleAndEditWrapper>
        <Title size={"h4"}>Order List</Title>
        {showEdit ? (
          <>
            {cartItems.length > 0 && (
              <Button variant="filled" color="red" style={{ width: "100px" }} onClick={()=>handleCartItemClick(cartItems[0])}>
                Edit
              </Button>
            )}
          </>
        ) : (
          <Button
            onClick={() => handleCloseButtonClick()}
            variant="outline"
            color="dark"
            style={{ width: "50px" }}
          >
            X
          </Button>
        )}
      </TitleAndEditWrapper>
      <Table>
        <thead>
          <tr>
            <th>Products</th>
            <th>Quantrity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Stack>
  );
}

export default OrderList;
