import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Home.css'; // Custom styles

const Home = () => {
  const [content, setContent] = useState({});
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <section className="hero-section text-center">
        <div className="image-container" onClick={() => navigate('/about')}>
          <img src="/image1.png" alt="Hero" className="img-fluid img-rounded" />
          <h1 className="image-heading">Empowering Businesses with AI and Innovation</h1>
        </div>
        <button className="btn btn-primary m-2" onClick={() => navigate('/about')}>Learn More</button>
        <button className="btn btn-secondary m-2" onClick={() => navigate('/contact')}>Contact Us</button>
      </section>
      <section className="about-us mt-4">
        <div className="image-container" onClick={() => navigate('/about')}>
          <img src="/image2.png" alt="About Us" className="img-fluid img-rounded" />
          <h1 className="image-heading">About Us</h1>
        </div>
        <p>{content.content?.rendered || 'Sraigen Innovative Technologies (SIT) is a cutting-edge startup specializing in Artificial Intelligence, ERP solutions, data visualization, and software services. Our mission is to revolutionize businesses and education through AI-powered innovations.'}</p>
      </section>
      <section className="services mt-4">
        <h2>Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="image-container">
              <img src="/image3.png" alt="AI Solutions" className="img-fluid img-rounded" onClick={() => navigate('/services')} />
              <h3 className="image-heading">AI Solutions</h3>
            </div>
            <p>AI-powered products and personalized learning tools.</p>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <img src="/image4.png" alt="AI Automation" className="img-fluid img-rounded" onClick={() => navigate('/services')} />
              <h3 className="image-heading">AI Automation</h3>
            </div>
            <p>Automating complex workflows to ease manual work.</p>
          </div>
          <div className="col-md-4">
            <div className="image-container">
              <img src="/image5.png" alt="ERP Solutions" className="img-fluid img-rounded" onClick={() => navigate('/services')} />
              <h3 className="image-heading">ERP Solutions</h3>
            </div>
            <p>Custom modules, integrations, and support.</p>
          </div>
        </div>
      </section>
      <section className="contact-info mt-4">
        <h2>Contact Info</h2>
        <p>
          <i className="fas fa-phone-alt"></i> +123 456 7890<br/>
          <i className="fas fa-envelope"></i> info@sraigen.com<br/>
          <i className="fas fa-map-marker-alt"></i> Bengaluru, India
        </p>
        <button className="btn btn-primary mt-2" onClick={() => navigate('/contact')}>Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
