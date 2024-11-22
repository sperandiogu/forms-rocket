import React from "react";
import "../style/Sidebar.css";
import logo from "./Layer_1.svg"; // Substitua pelo caminho do logo

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="sidebar-content">
        <h1>Bem-Vindo!</h1>
        <p>Faça agora sua inscrição para o RCKT CAMP 25</p>
      </div>
      <div className="sidebar-footer">
        <h2>Avivamento</h2>
        <p>Atos 2:17-21</p>
      </div>
    </div>
  );
};

export default Sidebar;
