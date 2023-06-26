import { createContext, useState, useEffect, useContext } from 'react';
import { ProductContext } from './ProductsContext';
import { getProducts } from '../services/getAPIs';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.variantId === productToAdd.variantId  
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
    cartItem.variantId === productToAdd.variantId 
        ? { ...cartItem, quantity: productToAdd.quantity }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: productToAdd.quantity }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.variantId !== cartItemToClear.variantId  );

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  clearCart:()=>{},
  handleCartItemClick:()=>{}
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const {setProduct ,setAllProducts,setShowProduct} = useContext(ProductContext)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
    console.log("New Cart total",newCartTotal)
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemToCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const clearCart =()=>{
    setCartItems([])
  }
  const handleCartItemClick=(cartItem)=>{
    let newProduct;
    getProducts(cartItem.subCategoryId).then((response) => {
      let products = response?.data?.result
      setAllProducts(products);
      newProduct = products.find((product)=> product.productId==cartItem.productId)
      setProduct(newProduct)
      setShowProduct(true)
      //setLoader(false);
    });
    //let newProduct = newSubCategory.find((product)=> product.productId == cartItem.productId)
    console.log("Product found", newProduct,cartItem)
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
    clearCart,
    handleCartItemClick
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};