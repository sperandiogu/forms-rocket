import React from "react";

interface Step3Props {
  data: any;
  onPrevious: () => void;
  onSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ onPrevious, onSubmit }) => {
  return (
    <form className="form-wrapper">
      <h1 className="form-title">Pagamento</h1>
      <p className="form-subtitle">
        Escaneie o QR Code com o app do seu banco ou copie o código Pix para
        concluir o pagamento.
      </p>
      <div className="form-group">
        <img
          src="/imgs/qr-code-rocket.png"
          alt="QR Code"
          style={{
            maxWidth: "100%",
            borderRadius: "8px",
            border: "1px solid #cccccc",
            padding: "10px",
            backgroundColor: "#ffffff",
          }}
        />
      </div>
      <div className="form-group">
        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#333",
            lineHeight: "1.5",
            wordWrap: "break-word",
            overflowWrap: "break-word", // Garante quebra correta em palavras longas
          }}
        >
          <strong>Pix Copia-e-Cola:</strong>
          <br />
          <span
            style={{
              display: "inline-block",
              wordBreak: "break-word", // Quebra as palavras longas para caber na tela
              textAlign: "center",
              width: "100%", // Mantém alinhamento
            }}
          >
            00020126520014BR.GOV.BCB.PIX0130eventos@lagoinhajundiai.com.br5204000053039865406340.005802BR5901N6001C62140510RCKTCAMP256304DA2Fr
          </span>
        </p>
      </div>
      <div className="form-button-group">
        <button
          type="button"
          className="form-button previous"
          onClick={onPrevious}
        >
          ← Voltar
        </button>
        <button
          type="button"
          className="form-button next"
          onClick={onSubmit}
        >
          Finalizar
        </button>
      </div>
    </form>
  );
};

export default Step3;
