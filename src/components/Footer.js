import React from "react";

var Currentyear = new Date().getFullYear();

function Footer() {
  return <footer>
    <p>Copyright {Currentyear}</p>
  </footer>
}

export default Footer;