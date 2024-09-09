import React from 'react';
import AboutImg from '../../assets/AboutImg.png'; // Correct image path
import Member1 from '../../assets/Member1.png'; // Ensure path is correct
import Member2 from '../../assets/Member2.png';
import Member3 from '../../assets/Member3.png';
import Member4 from '../../assets/Member4.png';

import './About.css'; // Importing the CSS for styling

const About = () => {
  const teamMembers = [
    { name: 'Matt Bobby', title: 'CEO and Founder', img: Member1 },
    { name: 'Sarah Parker', title: 'Chief Operating Officer', img: Member2 },
    { name: 'John Doe', title: 'Head of Marketing', img: Member3},
    { name: 'Emily Stone', title: 'Lead Developer', img: Member4 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="about-container">
        {/* First Div: About Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Founded in 2016, Homecq is a real estate technology company with a mission
            to empower people to move freely. We're re-imagining the way people buy, sell, and rent homes, 
            with a focus on design, quality, and community. Our end-to-end platform allows anyone to discover, 
            book, and experience homes in 20+ cities across the States.
          </p>
        </div>

        {/* Second Div: Image */}
        <div className="about-image">
          <img src={AboutImg} alt="Homecq Team" />
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="team-container">
  <h2 className="team-header">Meet Our Team</h2>
  <div className="team-grid">
    {teamMembers.map((member, index) => (
      <div key={index} className="team-member">
        <img src={member.img} alt={member.name} className="team-img" />
        <div className="team-info">
          <h3 className="team-name">{member.name}</h3>
          <p className="team-title">{member.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default About;
