import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styles from "./Header.module.css"
import ModeButton from "../ModeButton/Modebutton"

interface HeaderProps{
  mode:string
}

const Header = (mode:HeaderProps)=>{


  return(
    <Navbar collapseOnSelect expand="lg"  variant="dark" sticky="top" className={styles.dnd_nav}>
    <Container>
    <Navbar.Brand href="/#/">The D&D project</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/#/About">About</Nav.Link>
        <Nav.Link href="/#/Contact">Contact</Nav.Link>
        <NavDropdown title="API" id="collasible-nav-dropdown" className={styles.dnd_nav} style={{backgroundColor:'#882323',color:'antiquewhite'}}>
          <NavDropdown.Item className={styles.dnd_nav}  href="/#/Spells">Spells</NavDropdown.Item>
          <NavDropdown.Item href="/#/Races" className={styles.dnd_nav}>Races</NavDropdown.Item>
          <NavDropdown.Item href="/#/Monsters" className={styles.dnd_nav}>Monsters</NavDropdown.Item>
          
          <NavDropdown.Item href="/#/Classes" className={styles.dnd_nav}>Classes</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link href="/#/Privacy" className={styles.dnd_nav} >Privacy Policy</Nav.Link>
        <ModeButton/>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  

  )


}

export default Header