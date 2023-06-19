import Navigation from "../modules/navigation/navigation.component";
import { LayoutChildren, LayoutContainer, NavBarContainer } from "./MainLayout.styles";

const MainLayout = (props) => {
    const {children} = props
  return (
    <>
      <LayoutContainer>
        <NavBarContainer>
          <Navigation />
        </NavBarContainer>
        <LayoutChildren>{children}</LayoutChildren>
      </LayoutContainer>
    </>
  );
};

export default MainLayout;
