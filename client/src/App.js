import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// My components

import UserHome from "./Components/UserHome";
import Response from "./Components/Response";


function UserApp() {
  return (
    <Routes>
      <Route exact path="/" element={<UserHome />} />
      <Route exact path="/response" element={<Response />} />
    </Routes>
  );
}


function App() {
  return (
    <>
      <Router>
          <UserApp />
      </Router>
    </>
  );
}

export default App;
