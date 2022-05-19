import React from 'react';

const Footer = () => {
  const getDate = new Date();
  return (
    <div>
      <p> Copyright @Kasidit {getDate.getFullYear()}</p>
    </div>
  );
};

export default Footer;
