import React from "react";

import facebook from "../../style/facebook.png";
import twit from "../../style/twit.png";
import g from "../../style/g+.png";
import lin from "../../style/lin.png";

class Footer extends React.Component {
  footerContact = [facebook, twit, g, lin];

  render() {
    return (
      <footer className="footer">
        {this.footerContact.map((item, index) => (
          <div key={index} className="footer__contact">
            <img src={item} alt="not found"></img>
          </div>
        ))}
      </footer>
    );
  }
}

export { Footer };
