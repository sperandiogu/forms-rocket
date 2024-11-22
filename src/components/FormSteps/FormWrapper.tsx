import React, { useState } from "react";
import "../../style/FormWrapper.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

const FormWrapper: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    phone: "",
    guardianName: "",
    guardianPhone: "",
    medicalInfo: "",
  });

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3)); // Avança até o último step
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1)); // Retrocede até o primeiro step
  };

  const handleFileUpload = (file: File) => {
    // Aqui você pode lidar com o arquivo enviado (ex.: enviar ao servidor)
    console.log("Arquivo enviado:", file);
  };

  return (
    <div className="main-content">
      {currentStep === 1 && (
        <Step1
          data={formData}
          setData={setFormData}
          onNext={handleNext}
        />
      )}
      {currentStep === 2 && (
        <Step2
          data={formData}
          setData={setFormData}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
      {currentStep === 3 && (
        <Step3
          data={formData}
          onPrevious={handlePrevious}
          onFileUpload={handleFileUpload} // Passa o callback para o Step3
        />
      )}
    </div>
  );
};

export default FormWrapper;
