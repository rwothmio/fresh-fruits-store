import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import format from "date-fns/format";

function Footer() {
  return (
    <div id="footer">
      <div className="thisSite">
        <Link to="/about">About</Link>
        <a
          href="https://github.com/rwothmio/fresh-fruits-store"
          target="_blank"
        >
          Source Code
        </a>
      </div>

      <div className="lastWords">
        <p>&copy; Rwothmio Bob {format(new Date(), "yyyy")}</p>
        <small>Fresh Fruits Store V1.0.0</small>
        <p id="kampala">-- Made In Kampala --</p>
      </div>
    </div>
  );
}
export default Footer;
