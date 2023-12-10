import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <h2>
        Ha Van Canh{" "}
        <i style={{ color: "#db9e61" }} className="fa-solid fa-hand"></i>
      </h2>
      <div className="social">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-square-instagram"></i>
        <i class="fa-brands fa-instalod"></i>
      </div>
      <span>
        <i class="fa-regular fa-copyright"></i> Crypticalcoder. All rights
        reserved
      </span>
    </div>
  );
};

export default Footer;
