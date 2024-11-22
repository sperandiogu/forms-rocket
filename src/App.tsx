import React from "react";
import "./App.css";
import FormWrapper from "./components/FormSteps/FormWrapper";
import Sidebar from "./components/Sidebar";
<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
</style>

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <FormWrapper />
    </div>
  );
};

export default App;
