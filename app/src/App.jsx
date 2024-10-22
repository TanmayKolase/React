import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import FormSubmissionHandle from "./components/FormSubmissionHandle";
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
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/formSubmissionHandle"
              element={<FormSubmissionHandle />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
