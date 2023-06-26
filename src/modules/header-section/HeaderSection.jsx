import React, { useContext } from "react";
import { HeaderContainer, LogoContainer, LogoWithDropdown, ProfileWrapper, UserWrapper } from "./HeaderSection.styles";
import { Stack, TextInput } from "@mantine/core";
import Navigation from "../navigation/navigation.component";
import { Outlet } from "react-router-dom";
import ATLogo from '../../assets/images/ATLogo.png'
import ProfilePicture from '../../assets/images/profilepicture.jpeg'
import {ReactComponent as SearchIcon} from '../../assets/svgs/search.svg'
import { AppContext } from "../../context/AppContext";

function HeaderSection() {
  const {setShowInProgress} = useContext(AppContext)
  return (
    <>
      <HeaderContainer>
        <LogoContainer><img width={'25px'} height={'25px'} src={ATLogo} alt="logo" />AT Inks</LogoContainer>
        <div style={{width:"40%"}} onClick={()=>setShowInProgress(true)}>
        <TextInput
            icon={<SearchIcon width={'20px'} height={'20px'} />}
            type="search"
            disabled={true}
            placeholder="Search"
            style={{
              width:"100%"
            }}
        />
        </div>
        <div onClick={()=>setShowInProgress(true)} style={{display:"flex", alignItems:"center"}}><LogoWithDropdown backgroundImage={ATLogo}></LogoWithDropdown>&#8964;</div>
        <ProfileWrapper onClick={()=>setShowInProgress(true)}>
          <LogoWithDropdown backgroundImage={ProfilePicture}></LogoWithDropdown>
          <UserWrapper>
            <div>User Admin</div>
            <div>user.admin@gmail.com</div>
          </UserWrapper>
          <div>&#8964;</div>
        </ProfileWrapper>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default HeaderSection;
