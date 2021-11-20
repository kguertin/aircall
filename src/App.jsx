import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import Main from "./views/Main.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />

      <div className="container-view">
        <Main />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
