import styled from "@emotion/styled";

export const ProductsAndCartContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    height: 96%;
    padding: 0 15px;
    border-radius: 10px;
    justify-content: space-between;
`

export const ProductContainer = styled.div`
    width: 60%;
    height: 100%;
    background-color: #FFF;
    padding: 10px 10px;
`

export const CartContainer = styled.div`
    width: 35%;
    height: 100%;
    background-color: #FFF;
    padding: 10px 10px;
    height: 80vh;
    overflow: auto;
`

export const NoItemsWrappers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ProductsRow = styled.div`
    margin-top: 20px;
    width: 60%;
    height: 20vh;
    overflow: auto;
    background-color: #fff;
`