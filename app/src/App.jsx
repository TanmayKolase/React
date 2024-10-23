import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import ReactHookForm from "./components/ReactHookForm";
import Home from "./components/Home";
import RegistrationForm from "./components/RegistrationForm";
function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/reactHookForm">React Hook Form</NavLink>
            </li>
            <li>
              <NavLink to="/registrationForm">Registration Form</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reactHookForm" element={<ReactHookForm />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
