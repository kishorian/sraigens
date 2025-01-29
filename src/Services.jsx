import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Services.css';  // Custom styles
import { useNavigate } from 'react-router-dom';
const Services = () => {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL;
        const response = await axios.get(`${apiUrl}/services`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Error fetching services.');
      }
    };

    fetchServices();
  }, []);

  return (
    <div className="container mt-4">
      <h2>Our Services</h2>
      <section className="services mt-4">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="image-container" onClick={() => navigate('/contact')}>
              <img src="/image3.jpg" alt="AI Solutions" className="img-fluid img-rounded" />
              <h3 className="image-heading">AI Solutions</h3>
            </div>
            <p>AI-powered products and personalized learning tools.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="image-container" onClick={() => navigate('/contact')}>
              <img src="/image4.jpg" alt="AI Automation" className="img-fluid img-rounded" />
              <h3 className="image-heading">AI Automation</h3>
            </div>
            <p>Automating complex workflows to ease manual work.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="image-container" onClick={() => navigate('/contact')}>
              <img src="/image5.jpg" alt="ERP Solutions" className="img-fluid img-rounded" />
              <h3 className="image-heading">ERP Solutions</h3>
            </div>
            <p>Custom modules, integrations, and support.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="image-container" onClick={() => navigate('/contact')}>
              <img src="/image6.webp" alt="Data Visualization" className="img-fluid img-rounded" />
              <h3 className="image-heading">Data Visualization</h3>
            </div>
            <p>Dashboards, Power BI, and insights.</p>
          </div>
          <div className="col-md-4 mb-4">
            <div className="image-container" onClick={() => navigate('/contact')}>
              <img src="/image7.jpg" alt="Software Services" className="img-fluid img-rounded" />
              <h3 className="image-heading">Software Services</h3>
            </div>
            <p>Website development, POS systems, etc.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
