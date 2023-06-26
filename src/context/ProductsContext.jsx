import { createContext, useState } from "react";

export const ProductContext = createContext({
    products:[],
    setAllProducts:()=>{},
    selectedProduct:{},
    setProduct:()=>{},
    getProduct:()=>{},
    subCategory:[],
    setSubCatgory:()=>{},
    selectedSubCategory:{},
    setCurrentSubCategory:()=>{},
    showProduct:false,
    setShowProduct:()=>{}
})

export const ProductProvider=({children})=>{
    const [products,setProducts] = useState([])
    const [selectedProduct,setSelectedProduct] = useState({})
    const [subCategories, setSubCategories] = useState([])
    const [selectedSubCategory, setSelectedSubCategory] = useState({})
    const [categories, setCategories] = useState([])
    const [selectedCategory,setSelectedCategory] = useState({})
    const [showProduct,setShowProduct] = useState(false)
    const setAllProducts =(products)=>{
        setProducts(products)
        return
    }
    const setProduct=(product)=>{
        setSelectedProduct(product)
        return
    }
    const getProduct=(id)=>{
        let product = products.find((product)=>product.productId === id)
        return product
    }
    const setAllSubCategories = (subCategories)=>{
        setSubCategories(subCategories)
        return
    }
    const setCurrentSubCategory = (subCategory)=>{
        setSelectedSubCategory(subCategory)
        return
    }

    const contextValue={
        products,
        selectedProduct,
        setAllProducts,
        setProduct,
        getProduct,
        subCategories,
        selectedSubCategory,
        setAllSubCategories,
        setCurrentSubCategory,
        showProduct,
        setShowProduct,
        categories,
        setCategories,
        setSelectedCategory,
        selectedCategory
    }
    return(
        <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>
    )
}