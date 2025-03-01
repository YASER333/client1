// // src/Navigation.js

// import React from 'react';
// import './navi.css'; 

// const Navigation = () => {
//   const handleMouseOver = (event) => {
//     const tooltip = event.target.querySelector('.tooltip');
//     if (tooltip) {
//       tooltip.style.visibility = 'visible';
//       tooltip.style.opacity = '1';
//     }
//   };

//   const handleMouseOut = (event) => {
//     const tooltip = event.target.querySelector('.tooltip');
//     if (tooltip) {
//       tooltip.style.visibility = 'hidden';
//       tooltip.style.opacity = '0';
//     }
//   };

//   return (
//     <ul className="navbar">
//       <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-tooltip="Go to homepage">Home
//         <div className="tooltip">Go to homepage</div>
//       </li>
//       <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-tooltip="Learn about us">About
//         <div className="tooltip">Learn about us</div>
//       </li>
//       <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-tooltip="View our services">Services
//         <div className="tooltip">View our services</div>
//       </li>
//       <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} data-tooltip="Get in touch">Contact
//         <div className="tooltip">Get in touch</div>
//       </li>
//     </ul>
//   );
// };

// export default Navigation;
