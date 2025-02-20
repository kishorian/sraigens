import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import './About.css'; 

const scrollVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' }},
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeInOut' }},
};

const About = () => {
  const [content, setContent] = useState({});

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const apiUrl = import.meta.env.VITE_WORDPRESS_API_URL;
        const response = await axios.get(`${apiUrl}/pages?slug=about`);
        setContent(response.data[0]);
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchContent();
  }, []);

  return (
    <motion.div className="container mt-4">
      <motion.section
        className="image-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={imageVariants}
      >
        <img src="/image8.webp" alt="About Us" className="img-fluid img-rounded" />
        <h2 className="Aimage-heading">About Srigen Innovative Technologies</h2>
      </motion.section>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={scrollVariants}
      >
        {content.content?.rendered || 'Sraigen Innovative Technologies (SIT) is a cutting-edge startup specializing in Artificial Intelligence, ERP solutions, data visualization, and software services. Our mission is to revolutionize businesses and education through AI-powered innovations. At SIT, every service we provide is enhanced with AI capabilities, ensuring smarter, more efficient, and future-ready solutions. We also specialize in automation using Agentic AI, enabling businesses to streamline operations and achieve unparalleled efficiency. Our expertise extends to personalized learning solutions, such as AI-powered tutors designed to redefine education by interacting with students and enhancing their learning experience. Additionally, we offer tailored ERP systems, advanced data visualizations, and comprehensive software services like website development, empowering businesses to visualize and act on their insights. Headquartered in Bengaluru, our dedicated team is committed to driving innovation and delivering excellence.'}
      </motion.p>
      <motion.section
        className="image-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={imageVariants}
      >
        <img src="/image9.jpg" alt="Vision and Mission" className="img-fluid img-rounded" />
        <h2 className="Aimage-heading">Vision & Mission</h2>
      </motion.section>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={scrollVariants}
      >
        <strong>VISION:</strong> {content.vision || 'To lead the world into a future where artificial intelligence simplifies life, enhances learning, and empowers businesses to achieve extraordinary outcomes through innovative and intelligent solutions.'}
      </motion.p>
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={scrollVariants}
      >
        <strong>MISSION:</strong> {content.mission || 'At Srigen Innovative Technologies, our mission is to create groundbreaking AI-driven solutions that transform how people learn, work, and grow. We aim to deliver intuitive, ethical, and impactful innovations that inspire progress, nurture potential, and drive sustainable growth for individuals and organizations alike.'}
      </motion.p>
      <motion.section
        className="team-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ multiple: true }}
        variants={imageVariants}
      >
        <div className="team-member image-container">
          <img src="/image10.webp" alt="Team Member" className="img-fluid img-rounded" />
          <h2 className="Aimage-heading">OUR TEAM</h2>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default About;
