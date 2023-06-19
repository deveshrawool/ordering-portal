import styled from "@emotion/styled";

export const CategoriesContainer= styled.div`
 width: 60vw;
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
`
