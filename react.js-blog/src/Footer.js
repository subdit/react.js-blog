import React from 'react';

const Footer = () => {
  const getDate = new Date();
  return (
    <div>
      <p>Copyright @Kasidit {getDate.getTimezoneOffset()}</p>
    </div>
  );
};

export default Footer;
