import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import FormSubmissionHandle from "./components/FormSubmissionHandle";
import MultiInputFormHandle from "./components/MultiInputFormHandle";
import ExpandableSection from "./components/ExpandableSection";
import ImageGallery from "./components/ImageGallery";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/formSubmissionHandle">
                  Form Submission Handle
                </NavLink>
              </li>
              <li>
                <NavLink to="/multiInputFormHandle">
                  Multi Input Form Handle
                </NavLink>
              </li>
              <li>
                <NavLink to="/expandableSection">Expandable Section</NavLink>
              </li>
              <li>
                <NavLink to="/imageGallery">Image Gallery</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/formSubmissionHandle"
              element={<FormSubmissionHandle />}
            />
            <Route
              path="/multiInputFormHandle"
              element={<MultiInputFormHandle />}
            />
            <Route path="/expandableSection" element={<ExpandableSection />} />
            <Route path="/imageGallery" element={<ImageGallery />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
