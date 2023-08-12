import React from "react";
import "./App.css";
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store/index";
import NavBar from "./components/navbar/NavBar";
import Footer from "./containers/footer/Footer";
import Main from "./containers/main/Main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
