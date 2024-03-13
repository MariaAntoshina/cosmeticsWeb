import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderAppBar from "../header/Header";
import HomePage from "../pages/homePage/HomePage";
import {Fragment} from "react";
import {ENDPOINTS} from "../../constants";
import PalettePage from "../pages/palettePage/PalettePage";

function App() {
  return (
      <Fragment>
        <HeaderAppBar/>
        <Router>
          <Routes>
            <Route path= {ENDPOINTS.HOME} element={<HomePage />} />
            <Route path= {ENDPOINTS.PALETTES} element={<PalettePage />} />

          </Routes>
        </Router>
      </Fragment>
  )
}

export default App;
