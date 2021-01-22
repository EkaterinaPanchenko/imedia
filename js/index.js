import React from "react";
import ReactDom from "react-dom";

import { Header } from "./componets/header";
import { Main } from "./componets/main";
import { Contact } from "./componets/contact";
import { Footer } from "./componets/footer";

const rootEL = document.querySelector("#root");

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <Contact />
        <Footer />
      </div>
    );
  }
}

ReactDom.render(<App />, rootEL);
