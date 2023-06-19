import axiosInstance from "./axiosInstance"


export const getAllCategories = () =>{
    return (
        axiosInstance.get('getCategories.json')
        .then((response)=> response)
        .catch((error)=>error)
    )
    
}
//https://elredtest.s3.amazonaws.com/reactAssignment/getSubCategory_<categoryId>.json

export const getAllSubCategories=(id)=>{
    return (
        axiosInstance.get(`getSubCategory_${id}.json`)
        .then((response)=> response)
        .catch((error)=>error)
    )
}