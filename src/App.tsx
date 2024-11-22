import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import FormWrapper from "./components/FormSteps/FormWrapper";
import Sidebar from "./components/Sidebar";
import ThankYou from "./components/ThankYou"; // Página de "Obrigado"
<style>
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<FormWrapper />} />
          <Route path="/obrigado" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
