import { Button, TextInput, Title } from "@mantine/core";
import React, { useContext } from "react";
import {
  ProductContainer,
  ProductDescription,
  ProductImage,
  ProductListConatiner,
} from "../categories.styles";
import { ProductContext } from "../../../context/ProductsContext";
import ShowProduct from "../../product/ShowProduct";
import NoImage from "../../../assets/images/icons8-no-image-100.png";
import { ReactComponent as SearchIcon } from "../../../assets/svgs/search.svg";
import { AppContext } from "../../../context/AppContext";

function Products() {
  const {
    selectedProduct,
    products,
    setProduct,
    setShowProduct,
    setAllProducts,
    showProduct,
  } = useContext(ProductContext);
  const {setShowInProgress} = useContext(AppContext)
  function handleProductClick(product) {
    setProduct(product);
    setShowProduct(true);
  }
  function handleShowProductClose() {
    setShowProduct(false);
    setProduct({});
  }
  return (
    <>
      {Object.keys(selectedProduct).length > 0 ? (
        <ShowProduct
          opened={showProduct}
          onClose={() => handleShowProductClose()}
          product={selectedProduct}
        />
      ) : (
        <></>
      )}
      <div style={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="outline"
          color="dark"
          fullWidth={true}
          style={{ width: "fit-content", padding: 0 }}
          onClick={() => setAllProducts([])}
        >
          {`< `}
        </Button>{" "}
        <Title style={{ marginLeft: "5px", marginRight: "auto" }} size={"h3"}>
          All Products
        </Title>
        <div style={{ width: "25%" }} onClick={() => setShowInProgress(true)}>
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
      <ProductListConatiner>
        {products.map((product) => {
          return (
            <ProductContainer
              key={product.productId}
              styles={{ marginRight: "10px" }}
              onClick={() => handleProductClick(product)}
            >
              <ProductImage
                width="50px"
                height="75px"
                src={product?.productImages[0] ?? NoImage}
                alt="productImage"
              />
              <Title size={"h5"}>{product.itemDescription}</Title>
              <ProductDescription>
                This is some product, it is good.
              </ProductDescription>
            </ProductContainer>
          );
        })}
      </ProductListConatiner>
    </>
  );
}

export default Products;
