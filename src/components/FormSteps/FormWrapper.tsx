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

  const handleSubmit = async () => {
    // Enviar dados para o backend
    console.log("Dados enviados:", formData);
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
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default FormWrapper;
