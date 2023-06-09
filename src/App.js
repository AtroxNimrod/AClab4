import React from 'react'
import AppRouter from "./components/AppRouter";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import "./styles/App.css";

const App = () => {
  return (
      <BrowserRouter>
          <NavBar/>
          <AppRouter/>
      </BrowserRouter>
  );
};

export default App;
