import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
        <p>Biography</p>
<h3>Who We Are</h3>
<p>
  Swastik Advanced Orthopedic Hospital, founded in 2008 in Ulhasnagar, Mumbai, is a premier center dedicated to advanced orthopedic care. With a strong commitment to delivering high-quality, value-driven healthcare services, we specialize in orthopedic trauma, joint replacements, spine surgeries, and minimally invasive treatments.
</p>
<p>We are all in 2024!</p>
<p>We are dedicated to revolutionizing healthcare with cutting-edge medical technology and patient-centered care.</p>
<p>
  Our hospital is equipped with ultra-modern facilities and supported by a team of experienced surgeons, intensivists, physiotherapists, and nursing staff. Over the years, we have expanded our services to include physiotherapy, cosmetology, and slimming centers. We believe in impeccable care, successful surgeries, and a kind-hearted approach to healing.
</p>
<p>Swastik Hospital stands for Smart Health, Talented Doctors, and Impeccable Service!</p>
<p>Healing with precision and compassion!</p>

        </div>
      </div>
    </>
  );
};

export default Biography;
