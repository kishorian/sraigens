import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css'; 

const scrollVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: 'easeOut' }},
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  const handleDropdownItemClick = (path) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  return (
    <Navbar expand="lg" className="custom-navbar" expanded={isMenuOpen}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <motion.img 
            src="sraigen.png" 
            alt="Company Logo" 
            className="company-logo"
            initial="hidden"
            animate="visible"
            viewport={{multiple : true}}
            variants={scrollVariants}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto navbar-nav">
            <Nav.Link as={Link} to="/" className="nav-item" onClick={() => handleLinkClick('/')}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-item" onClick={() => handleLinkClick('/about')}>ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/services" className="nav-item" onClick={() => handleLinkClick('/services')}>SERVICES</Nav.Link>
            <NavDropdown title="BLOG" id="blog-dropdown" className="nav-item">
              <NavDropdown.Item as={Link} to="/blog/ai-trends" onClick={() => handleDropdownItemClick('/blog/ai-trends')}>AI TRENDS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/erp-insights" onClick={() => handleDropdownItemClick('/blog/erp-insights')}>ERP INSIGHTS</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/company-news" onClick={() => handleDropdownItemClick('/blog/company-news')}>COMPANY NEWS</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact" className="nav-item" onClick={() => handleLinkClick('/contact')}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
