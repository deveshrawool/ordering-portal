import styled from "@emotion/styled";

export const ProductAndCartContainer = styled.div`
    display: grid;
    grid-template-columns:50% 50%;
    width: 100%;
    height: 100vh;
    font-size: 1rem;
`

export const ProductImageContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const VariantContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap:10px;

`

export const VariantWrapper = styled.div`
    width: fit-content;
    padding: 5px 10px;
    border-radius: 10px;
    border:${props=> props.selected ? '1px solid rgba(251, 61, 0,1)': '1px solid #6E6E6E'} ;
    background:${props=> props.selected ? 'rgba(251, 61, 0,0.5)': 'transparent'} ;
    cursor: pointer;
`