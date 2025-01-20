import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../style/spinner.css"; // Certifique-se de importar o CSS para o modal e o spinner
import FormHeader from "../FormHeader";

interface Step3Props {
  data: {
    name: string;
    birthDate: string;
    phone: string;
    guardianName: string;
    guardianPhone: string;
    medicalInfo: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_term: string;
    utm_content: string;
  };
  onPrevious: () => void;
  onFileUpload: (file: File) => void;
}

const Step3: React.FC<Step3Props> = ({ data, onPrevious, onFileUpload }) => {
  const navigate = useNavigate();
  const pixKey =
    "00020126520014BR.GOV.BCB.PIX0130eventos@lagoinhajundiai.com.br5204000053039865406340.005802BR5901N6001C62140510RCKTCAMP256304DA2F";
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setFileError(false);
    }
  };

  const handleFinish = async () => {
    if (!uploadedFile) {
      setFileError(true);
      return;
    }

    setIsLoading(true); // Exibe o modal
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("birthDate", data.birthDate);
      formData.append("phone", data.phone);
      formData.append("guardianName", data.guardianName);
      formData.append("guardianPhone", data.guardianPhone);
      formData.append("medicalInfo", data.medicalInfo);
      formData.append("proofOfPayment", uploadedFile);

      // Adicionar os parâmetros UTM
      formData.append("utm_source", data.utm_source);
      formData.append("utm_medium", data.utm_medium);
      formData.append("utm_campaign", data.utm_campaign);
      formData.append("utm_term", data.utm_term);
      formData.append("utm_content", data.utm_content);

      const response = await fetch(
        "https://hook.us1.make.com/mj3o5dqf3395kec2ddshqwcyryhjofgs",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        console.error("Erro:", errorMessage);
        throw new Error("Erro ao enviar os dados para o webhook.");
      }

      navigate("/obrigado"); // Redireciona após o sucesso
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao finalizar a inscrição. Verifique os dados e tente novamente.");
    } finally {
      setIsLoading(false); // Oculta o modal
    }
  };

  return (
    <form className="form-wrapper step3-form">
      <FormHeader />
      <h1 className="form-title">Informações de pagamento</h1>
      <p className="form-subtitle">Valor 1º lote: R$ 340,00</p>
      <p className="form-subtitle">
        Escaneie o QR Code com o app do seu banco ou copie o código Pix para
        concluir o pagamento, faça o envio do comprovante para confirmar sua inscrição!
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
          disabled={isLoading} // Desativa enquanto carrega
        >
          Copiar Chave Pix
        </button>
        <button
          type="button"
          className="form-button upload"
          onClick={() => fileInputRef.current?.click()}
          disabled={isLoading} // Desativa enquanto carrega
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
        {fileError && (
          <p className="error-message">
            É obrigatório enviar o comprovante de pagamento.
          </p>
        )}
        <button
          type="button"
          className="form-button next"
          onClick={handleFinish}
          disabled={isLoading} // Desativa enquanto carrega
        >
          Finalizar Inscrição
        </button>
        <button
          type="button"
          className="form-button previous"
          onClick={onPrevious}
          disabled={isLoading} // Desativa enquanto carrega
        >
          ← Voltar
        </button>
      </div>

      {/* Modal com spinner e texto */}
      {isLoading && (
        <div className="modal">
          <div className="modal-box">
            <div className="spinner"></div>
            <p className="modal-text">Carregando... Por favor, aguarde.</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default Step3;
