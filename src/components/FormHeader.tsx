import React from "react";
import "../style/formheader.css";

const FormHeader: React.FC = () => {
  return (
    <div className="form-header">
      <h1 className="form-title">
        <b>RCKT CAMP XXVI | </b>Aquele que <b>BUSCAM</b>
      </h1>
      <p className="form-subtitle">Nosso acampamento acontecerá do dia XX ao XX de XXXXX.
      </p>
      <p className="form-subtitle"><b>Primeiro lote:</b> <span>R$</span> 380<span>,00</span>
      </p>
      <p className="form-subtitle">
        Viveremos coisas incríveis e precisamos que você preencha todas as
        informações, assim poderemos te direcionar da melhor maneira.
      </p>
    </div>
  );
};

export default FormHeader;
