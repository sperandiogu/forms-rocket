import React from "react";
import logo from "../logo-camp.svg"; // Substitua pelo caminho do logo
import "../style/Sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-content">
        <h1>BEM-VINDOS!</h1>
        <p>Faça agora sua inscrição para o RCKT CAMP 25</p>
      </div>
    </div>
  );
};

export default Sidebar;
