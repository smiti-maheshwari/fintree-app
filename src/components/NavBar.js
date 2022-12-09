import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useState, useEffect } from "react";
import logo from '../assets/img/logodiff.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="temp-home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#docs" className={activeLink === 'docs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('docs')}>Docs</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                {/* <a href="#"><img src={'navIcon1'} alt="" /></a> */}
                {/* <a href="#"><img src={''} alt="" /></a>
                <a href="#"><img src={''} alt="" /></a> */}
            </div>
            <button className="vvd" variant="flat" onClick={() => console.log('Donate Funds')}>
                <span>
                    Donate Funds
                </span>
            </button>
            <Link to="/loginGrowPlants">
                <Button className="vvd" variant="flat" onClick={() => console.log('Grow Plants')}>
                    <span>
                        Grow Plants
                    </span>
                </Button>
            </Link>
          </span>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
  )
}
