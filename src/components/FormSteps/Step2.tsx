import React, { useState } from "react";
import FormHeader from "../FormHeader";

interface Step2Props {
  data: { guardianName: string; guardianPhone: string; medicalInfo: string };
  setData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
  onPrevious: () => void;
}

const Step2: React.FC<Step2Props> = ({ data, setData, onNext, onPrevious }) => {
  const [errors, setErrors] = useState({ guardianName: false, guardianPhone: false });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false }); // Remove erro ao digitar
  };

  const handleNext = () => {
    const newErrors = {
      guardianName: !data.guardianName.trim(),
      guardianPhone: !data.guardianPhone.trim(),
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      onNext();
    }
  };

  return (
    <form noValidate>
      <FormHeader />
      <h1 className="form-title">Informações do Responsável</h1>
      <p className="form-subtitle">
        Precisamos de algumas informações dos seus responsáveis, assim temos um contato mais rápido com eles!
      </p>
      <div className="form-group">
        <label>Nome do Responsável</label>
        <input
          type="text"
          name="guardianName"
          placeholder="Nome do responsável"
          className={`form-control ${errors.guardianName ? "is-invalid" : ""}`}
          value={data.guardianName}
          onChange={handleChange}
        />
        {errors.guardianName && <div className="invalid-feedback">Por favor, insira o nome do responsável.</div>}
      </div>
      <div className="form-group">
        <label>Telefone do Responsável</label>
        <input
          type="tel"
          name="guardianPhone"
          placeholder="+55 (__) _____-____"
          className={`form-control ${errors.guardianPhone ? "is-invalid" : ""}`}
          value={data.guardianPhone}
          onChange={handleChange}
        />
        {errors.guardianPhone && <div className="invalid-feedback">Por favor, insira o telefone do responsável.</div>}
      </div>
      <div className="form-group">
        <label>Alguma Informação Médica?</label>
        <input
          type="text"
          name="medicalInfo"
          placeholder="Alergias, condições de saúde, etc."
          className="form-control"
          value={data.medicalInfo}
          onChange={handleChange}
        />
      </div>
      <div className="form-button-group">
        <button type="button" className="form-button previous" onClick={onPrevious}>
          ← Voltar
        </button>
        <button type="button" className="form-button next" onClick={handleNext}>
          Próximo →
        </button>
      </div>
    </form>
  );
};

export default Step2;
