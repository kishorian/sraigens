import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css'; // Custom styles

const scrollVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }},
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeInOut' }},
};


const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div className="container mt-4">
      <motion.section
        className="hero-section text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={scrollVariants}
      >
        <motion.div
          className="image-container"
          variants={imageVariants}
          onClick={() => navigate('/about')}
          whileHover={{ scale: 1.03 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ multiple: true }}
        >
          <img src="/image1.jpg" alt="Hero" className="img-fluid img-blend" />
          <h1 className="image-heading">Empowering Businesses with AI and Innovation</h1>
        </motion.div>
        <motion.button
          className="btn btn-primary m-2"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/about')}
        >
          Learn More
        </motion.button>
        <motion.button
          className="btn btn-secondary m-2"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </motion.button>
      </motion.section>

      <motion.section
        className="about-us mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={scrollVariants}
      >
        <motion.div
          className="image-container"
          variants={imageVariants}
          onClick={() => navigate('/about')}
          whileHover={{ scale: 1.03 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ multiple: true }}
        >
          <img src="/image2.jpg" alt="About Us" className="img-fluid img-blend" />
          <h1 className="image-heading">About Us</h1>
        </motion.div>
        <p className="about-description">
          {"Sraigen Innovative Technologies (SIT) is a cutting-edge startup specializing in Artificial Intelligence, ERP solutions, data visualization, and software services. Our mission is to revolutionize businesses and education through AI-powered innovations."}
        </p>
      </motion.section>

      <motion.section
        className="services mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={scrollVariants}
      >
        <h2>Our Services</h2>
        <motion.div className="row">
          <motion.div
            className="col-md-4"
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ multiple: true }}
          >
            <div className="image-container" onClick={() => navigate('/services')} >
              <img src="/image3.jpg" alt="AI Solutions" className="img-fluid img-blend" />
              <h3 className="image-heading">AI Solutions</h3>
            </div>
            <p>AI-powered products and personalized learning tools.</p>
          </motion.div>

          <motion.div
            className="col-md-4"
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ multiple: true }}
          >
            <div className="image-container" onClick={() => navigate('/services')}>
              <img src="/image4.jpg" alt="AI Automation" className="img-fluid img-blend" />
              <h3 className="image-heading">AI Automation</h3>
            </div>
            <p>Automating complex workflows to ease manual work.</p>
          </motion.div>

          <motion.div
            className="col-md-4"
            variants={imageVariants}
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ multiple: true }}
          >
            <div className="image-container" onClick={() => navigate('/services')}>
              <img src="/image5.jpg" alt="ERP Solutions" className="img-fluid img-blend" />
              <h3 className="image-heading">ERP Solutions</h3>
            </div>
            <p>Custom modules, integrations, and support.</p>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        className="contact-info mt-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={scrollVariants}
      >
        <h2>Contact Info</h2>
        <p>
          <i className="fas fa-phone-alt"></i> +91 79896 18046<br />
          <i className="fas fa-envelope"></i> info@sraigen.com<br />
          <i className="fas fa-map-marker-alt"></i> Bengaluru, India
        </p>
        <motion.button
          className="btn btn-primary mt-2"
          whileHover={{ scale: 1.05 }}
          onClick={() => navigate('/contact')}
        >
          Contact Us
        </motion.button>
      </motion.section>
    </motion.div>
  );
};

export default Home;
