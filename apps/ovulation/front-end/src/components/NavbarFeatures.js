import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


import Ovulation from "./Ovulation";
import FooterPage from "./FooterPage";

class NavbarFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      dropdownOpen: false
    };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <Router>
        <Navbar color="indigo" dark expand="md" scrolling>
          <NavbarBrand href="/">
            <strong>TOTS TCHNOLOGY</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="#">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle nav caret>APP</DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem href="#">Ovulation</DropdownItem>
                    <DropdownItem href="#">Cconnect</DropdownItem>
                    <DropdownItem href="#">Tconnect</DropdownItem>
                    <DropdownItem href="#">eSyndic</DropdownItem>
                    <DropdownItem href="#">Relais</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
                <form className="form-inline md-form mt-0">
                  <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search" />
                </form>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
       
      </Router>
    
    );
  }
}

export default NavbarFeatures