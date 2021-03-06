import React, { Component } from "react";
// import reactLogo from "./logo-react.svg";
// import djangoLogo from "./logo-django.svg";
import paypalLogo from "./paypal-logo-color.svg";
import "./App.css";
import NavigationBar from "./components/Navigation";
import TabDash from "./components/TabDash";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <img src={paypalLogo} className="PayPal-logo" alt="PayPal" />
        <TabDash />
      </div>
    );
  }
}

export default App;
