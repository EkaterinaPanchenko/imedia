import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section className="contact">
        <div className="contact__us">
          <h2 className="contact__us-title">CONTACT US</h2>
          <p className="contact__us-description">
            Cras suscipit porttitor porttitor. Morbi sit amet tincidunt sapien.
            Curabitur posuere lectus aliquet erat rutrum sollicitudin. In enim
            diam, ullamcorper quis libero et, ultricies commodo est. Quisque at
            ante vitae justo fermentum viverra ac eu justo. Ut luctus imperdiet
            lacus, eget laoreet erat posuere quis.
          </p>
        </div>
        <ul className="contact__list">
          <li className="contact__item">Phone: +44 555 555 555</li>
          <li className="contact__item">Fax: +44 555 555 555</li>
          <li className="contact__item">E-mail: info@acrostia.com</li>
          <li className="contact__item">Skype: Ac0stia</li>
        </ul>
      </section>
    );
  }
}

export { Contact };
