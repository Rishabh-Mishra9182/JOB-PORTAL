import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/ApplyJob";
import Applications from "./pages/Applications";
import RecuiterLogin from "./components/RecuiterLogin";
import { AppContext } from "./context/AppContext";

const App = () => {
  const {showRecuiterLogin} = useContext(AppContext)
  return (
    <div>
     { showRecuiterLogin && <RecuiterLogin />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
      </Routes>
    </div>
  );
};

export default App;
