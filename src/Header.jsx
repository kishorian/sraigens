import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'; // Import custom styles


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Hook to navigate programmatically

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu when a link is clicked and navigate to the respective page
  const handleLinkClick = (path) => {
    setIsMenuOpen(false); // Close the menu
    navigate(path); // Navigate to the clicked page
  };

  // Close the menu when a dropdown item is clicked
  const handleDropdownItemClick = (path) => {
    setIsMenuOpen(false); // Close the menu
    navigate(path); // Navigate to the clicked page
  };

  return (
    <Navbar expand="lg" className="custom-navbar" expanded={isMenuOpen}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="sraigen.png" alt="Company Logo" className="company-logo" />
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
