import styled from "@emotion/styled";
import { Stack } from "@mantine/core";

export const CategoriesContainer= styled.div`
 width: 90%;
 overflow: auto;
 white-space: nowrap;
`

export const Category = styled.div`
    display: inline-block;
    background-image: url(${(props) => props.backgroundImage});
    background-size:contain;
    background-repeat:no-repeat;
    width: 150px;
    height: 150px;
    border-radius:10px;
    margin-right: 20px;
    position: relative;
    border: ${(props)=> props.showBorder ? "2px solid orange" : "none"};
`;

export const ProductTitleWrapper = styled.div`
    position: absolute;
    bottom: 0;
    text-align: center;
    color: #fff;
    width: 100%;
`
export const ProductTitle = styled.div`
    display: flex;
    justify-content: center;
    background-color:${props => props.backgroundColor };
    color:${props => props.color ? props.color : '#fff' };
    padding :5px 0;
`

export const HorizontalLine = styled.hr`
    margin: 20px 0;
    width: 100%;
    color:#6E6E6E;
`

export const SubCategoryConatiner = styled.div`
    display:flex;
    width: 100%;
    flex-wrap: wrap;
    gap:15px;
`
export const ProductListConatiner = styled.div`
    display:flex;
    width: 100%;
    flex-wrap: wrap;
    gap:15px;
    max-height: 75vh;
    overflow: auto;
`
export const ProductContainer = styled.div`
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    width:150px;
    height: 150px;
    display: flex;
    flex-direction: column;
`
export const ProductImage = styled.img`
    display: block;
    margin-left:auto;
    margin-right: auto;

`
export const ProductDescription = styled.text`
    font-size:0.875rem;
    color:#6e6e6e;
`


