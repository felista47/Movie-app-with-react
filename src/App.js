import React from "react";
import "./App.css";
import Main from "./components/Body/Main";
import Sidebar from "./components/Sidebar/sidebar";
import { Provider } from "react-redux";
import store from "./redux/Store/store";

function App() {

  return (
    <Provider store={store}>
    <div className="App">
        <Sidebar />
        <Main />
      </div>
    </Provider>
  );
}

export default App;