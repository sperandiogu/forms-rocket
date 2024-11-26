import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Para navegação
import FormHeader from "../FormHeader";

interface Step3Props {
  data: any; // Dados coletados dos steps
  onPrevious: () => void;
  onFileUpload: (file: File) => void;
}

const Step3: React.FC<Step3Props> = ({ data, onPrevious, onFileUpload }) => {
  const navigate = useNavigate();
  const pixKey =
    "00020126520014BR.GOV.BCB.PIX0130eventos@lagoinhajundiai.com.br5204000053039865406340.005802BR5901N6001C62140510RCKTCAMP256304DA2F";
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const copyPixKey = () => {
    navigator.clipboard
      .writeText(pixKey)
      .then(() => alert("Chave Pix copiada para a área de transferência!"))
      .catch((err) => alert("Erro ao copiar a chave Pix: " + err));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setUploadedFile(file);
      onFileUpload(file);
    }
  };

  const handleFinish = async () => {
    // Enviar os dados para o webhook
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("birthDate", data.birthDate);
      formData.append("phone", data.phone);
      formData.append("guardianName", data.guardianName);
      formData.append("guardianPhone", data.guardianPhone);
      formData.append("medicalInfo", data.medicalInfo);
      if (uploadedFile) {
        formData.append("proofOfPayment", uploadedFile); // Adiciona o arquivo
      }

      const response = await fetch("https://hook.us1.make.com/1e6w9scq4byw3wl5v5k08xwi5wgribxp", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados para o webhook.");
      }

      // Redireciona para a página de "Obrigado" após o envio bem-sucedido
      navigate("/obrigado");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao finalizar a inscrição. Tente novamente.");
    }
  };

  return (
    <form className="form-wrapper step3-form">
      <FormHeader />
      <h1 className="form-title">Informações de pagamento</h1>
      <p className="form-subtitle">
        Escaneie o QR Code com o app do seu banco ou copie o código Pix para
        concluir o pagamento, faço o envio do comprovante para confirmar sua inscrição!
      </p>
      <div className="qr-code-container">
        <img
          src="/imgs/qr-code-rocket.png"
          alt="QR Code"
          className="qr-code-image"
        />
      </div>
      <div className="pix-key">
        <p>
          <strong>Pix Copia-e-Cola:</strong>
          <br />
          {pixKey}
        </p>
      </div>

      <div className="form-button-group">
        <button
          type="button"
          className="form-button copy"
          onClick={copyPixKey}
        >
          Copiar Chave Pix
        </button>
        <button
          type="button"
          className="form-button upload"
          onClick={() => fileInputRef.current?.click()}
        >
          Enviar Comprovante
        </button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={handleFileUpload}
        />
        {uploadedFile && (
          <div className="uploaded-file-preview">
            <p>Arquivo carregado: {uploadedFile.name}</p>
            {uploadedFile.type.startsWith("image/") ? (
              <img
                src={URL.createObjectURL(uploadedFile)}
                alt="Prévia do arquivo"
                className="file-preview-image"
              />
            ) : (
              <p className="file-preview-text">
                Não é possível pré-visualizar este arquivo.
              </p>
            )}
          </div>
        )}
        <button
          type="button"
          className="form-button next"
          onClick={handleFinish}
        >
          Finalizar Inscrição
        </button>
        <button
          type="button"
          className="form-button previous"
          onClick={onPrevious}
        >
          ← Voltar
        </button>
      </div>
    </form>
  );
};

export default Step3;
