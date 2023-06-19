import React from "react";
import { HeaderContainer } from "./HeaderSection.styles";
import { TextInput } from "@mantine/core";
import Navigation from "../navigation/navigation.component";
import { Outlet } from "react-router-dom";

function HeaderSection() {
  return (
    <>
      <HeaderContainer>
        <div>Logo AT Inks</div>
        <div>
          <TextInput
            type="search"
            disabled={true}
            placeholder="Search"
            width={"200px"}
          />
        </div>
        <div>Icon with circle and dropdown</div>
        <div>Account Information with Profile</div>
      </HeaderContainer>
      <Outlet />
    </>
  );
}

export default HeaderSection;
