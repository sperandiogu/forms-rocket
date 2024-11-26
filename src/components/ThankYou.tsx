import React from "react";
import "../style/ThankYou.css";

const ThankYou: React.FC = () => {
  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <img
          src="/imgs/success-icon.png"
          alt="Ícone de sucesso"
          className="thank-you-icon"
        />
        <h1 className="thank-you-title">Obrigado!</h1>
        <p className="thank-you-message">
          Recebemos seu cadastro e estamos animados para vê-lo no RCKT CAMP
          2025!
        </p>
        <p className="thank-you-message">
          Você receberá uma notificação no seu celular assim que sua inscrição for aprovada!
        </p>
        <a href="https://www.instagram.com/rocketjundiai" className="thank-you-button">
          Veja nosso instagram
        </a>
      </div>
    </div>
  );
};

export default ThankYou;
