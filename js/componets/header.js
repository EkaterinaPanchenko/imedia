import React from "react";

class Header extends React.Component {
  headerList = ["Home", "Services", "About", "Work", "Contacts"];
  render() {
    return (
      <header className="header">
        <div className="header__block">
          <h2 className="header__title">Imedia</h2>
        </div>
        <div className="header__block">
          <ul className="header__list">
            {this.headerList.map((item, index) => (
              <li key={index} className="header__item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  }
}

export { Header };
