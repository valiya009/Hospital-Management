import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          Swastik Hospital offers
           state-of-the-art facilities, including advanced diagnostics,
            specialized treatments, emergency care, and well-equipped patient rooms. Our services 
            cater to all medical needs, ensuring quality care with modern technology and expert doctors.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
