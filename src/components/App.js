import React from "react";
import { Provider } from "react-redux";
import store from "../store/";
import Header from "./Header";
import HomePage from "./Home-page";
import Modal from "./Modal";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomePage />
        <Modal />
      </div>
    </Provider>
  );
}

export default App;
