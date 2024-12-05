import React, { useState } from "react";
import FormHeader from "../FormHeader";

interface Step1Props {
  data: { name: string; birthDate: string; phone: string };
  setData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ data, setData, onNext }) => {
  const [errors, setErrors] = useState({ name: false, birthDate: false, phone: false });

  const formatPhoneNumber = (phone: string) => {
    let formattedPhone = phone.replace(/\D/g, ''); // Remove caracteres não numéricos

    if (!formattedPhone.startsWith('55')) {
      formattedPhone = '55' + formattedPhone; // Adiciona o DDI do Brasil se não estiver presente
    }

    formattedPhone = formattedPhone
      .replace(/^55(\d{2})(\d)/, '+55 ($1) $2') // Formata com o DDI e DDD
      .replace(/(\d{4,5})(\d{4})$/, '$1-$2'); // Adiciona o traço no final

    return formattedPhone;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setData({ ...data, [name]: formatPhoneNumber(value) }); // Aplica a formatação com DDI
    } else {
      setData({ ...data, [name]: value });
    }

    setErrors({ ...errors, [name]: false }); // Remove erro ao digitar
  };

  const handleNext = () => {
    const newErrors = {
      name: !data.name.trim(),
      birthDate: !data.birthDate.trim(),
      phone: !data.phone.trim(),
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      onNext();
    }
  };

  return (
    <form noValidate>
      <FormHeader />
      <h1 className="form-title">Informações Pessoais</h1>
      <div className="form-group">
        <label>Qual seu nome completo?</label>
        <input
          type="text"
          name="name"
          placeholder="Seu nome completo"
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          value={data.name}
          onChange={handleChange}
        />
        {errors.name && <div className="invalid-feedback">Por favor, insira seu nome.</div>}
      </div>
      <div className="form-group">
        <label>Qual sua data de nascimento?</label>
        <input
          type="date"
          name="birthDate"
          className={`form-control ${errors.birthDate ? "is-invalid" : ""}`}
          value={data.birthDate}
          onChange={handleChange}
        />
        {errors.birthDate && <div className="invalid-feedback">Por favor, insira sua data de nascimento.</div>}
      </div>
      <div className="form-group">
        <label>Seu Telefone?</label>
        <input
          type="tel"
          name="phone"
          placeholder="+55 (__) _____-____"
          className={`form-control ${errors.phone ? "is-invalid" : ""}`}
          value={data.phone}
          onChange={handleChange}
        />
        {errors.phone && <div className="invalid-feedback">Por favor, insira seu telefone.</div>}
      </div>
      <div className="form-button-group">
        <button type="button" className="form-button next" onClick={handleNext}>
          Próximo →
        </button>
      </div>
    </form>
  );
};

export default Step1;
