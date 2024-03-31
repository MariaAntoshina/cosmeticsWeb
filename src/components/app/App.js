import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderAppBar from "../header/Header";
import HomePage from "../pages/homePage/HomePage";
import {Fragment} from "react";
import {ENDPOINTS} from "../../constants";
import PalettePage from "../pages/palettePage/PalettePage";
import PowderPage from "../pages/powderPage/PowderPage";
import FoundationPage from '../pages/foundationPage/FoundationPage'
import {createStore} from "@reduxjs/toolkit";


function App() {
    return (
      <Fragment>
        <HeaderAppBar/>
        <Router>
          <Routes>
            <Route path= {ENDPOINTS.HOME} element={<HomePage />} />
            <Route path= {ENDPOINTS.PALETTES} element={<PalettePage />} />
              <Route path= {ENDPOINTS.POWDERS} element={<PowderPage />} />
              <Route path= {ENDPOINTS.FOUNDATIONS} element={<FoundationPage />} />

          </Routes>
        </Router>
      </Fragment>
  )
}

export default App;
