import React, { useState } from "react";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
import { useMappedState } from "redux-react-hook";
import { AppState } from "../../store/reducers";

function Status() {
  const { hasJoinedChannel, userName, isConnected } = useMappedState(
    (state: AppState) => state.chat
  );

  if (hasJoinedChannel && userName) {
    return <>{userName}</>;
  } else if (isConnected) {
    return <>Connected</>;
  } else {
    return <>Disconnected</>;
  }
}

function Navigation() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };

  const { hasJoinedChannel } = useMappedState((state: AppState) => state.chat);

  return (
    <Navbar color="dark" dark expand="md">
      <Container>
        <NavbarBrand href="/">Mochi Chat</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavLink href="javascript:void(0)">
            <Status />
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
