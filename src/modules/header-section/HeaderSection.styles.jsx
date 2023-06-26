import styled from "@emotion/styled";

export const HeaderContainer= styled.div`
 width: 100%;
 height:7vh;
 background-color: #fff;
 display: flex;
 align-items: center;
 justify-content: space-between;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-left:5%;
`

export const LogoWithDropdown = styled.div`
    background-image: url(${(props) => props.backgroundImage});
    background-size:contain;
    background-repeat:no-repeat;
    width: 40px;
    height: 40px;
    border-radius:80px;
    border: 1px solid black;
    background-position-x: center;
`

export const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;
`

export const UserWrapper = styled.div`
    display: flex;
    flex-direction:column;
    font-size: 0.9rem;
    margin-left: 5px;
`