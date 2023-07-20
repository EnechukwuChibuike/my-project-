import logo from "../logo.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1>
        <img src={logo} alt="logo" /> React
      </h1>
      <small>All rights reserved | LearnFactory React Router Class 2023 </small>
    </div>
  );
}

export default Footer;
