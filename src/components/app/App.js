import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderAppBar from "../header/Header";
import HomePage from "../pages/homePage/HomePage";
import {Fragment} from "react";

function App() {
  return (
      <Fragment>
        <HeaderAppBar/>
        <Router>
          <Routes>
            <Route path="/home" element={<HomePage />} />
          </Routes>
        </Router>
      </Fragment>
  )
}

export default App;
