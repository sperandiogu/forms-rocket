import React from "react";

interface Step3Props {
data: any;
onPrevious: () => void;
onSubmit: () => void;
}

const Step3: React.FC<Step3Props> = ({ onPrevious, onSubmit }) => {
  return (
  <form>
    <h1 className="form-title">Pagamento</h1>
    <p className="form-subtitle">
      Escaneie o QR Code com o app do seu banco ou copie o código Pix para
      concluir o pagamento.
    </p>
    <div className="qr-code">
      <img src="data:image/png;base64,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" alt="QR Code" />
    </div>
    <div className="pix-key">
      <p>Pix Copia-e-Cola: 00020126520014BR.GOV.BCB.PIX0130eventos@lagoinhajundiai.com.br5204000053039865406340.005802BR5901N6001C62140510RCKTCAMP256304DA2Fr</p>
    </div>
    <div className="form-button-group">
      <button type="button" className="form-button previous" onClick={onPrevious}>
        ← Voltar
      </button>
      <button type="button" className="form-button next" onClick={onSubmit}>
        Finalizar
      </button>
    </div>

  </form>
  );
  };

  export default Step3;
