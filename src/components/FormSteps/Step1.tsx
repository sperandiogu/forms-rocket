import React from "react";
import FormHeader from "../FormHeader";

interface Step1Props {
  data: { name: string; birthDate: string; phone: string };
  setData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
}

const Step1: React.FC<Step1Props> = ({ data, setData, onNext }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <form>
      <FormHeader />
      <h1 className="form-title">Informações Pessoais</h1>
      <div className="form-group">
        <label>Qual seu nome completo?</label>
        <input
          type="text"
          name="name"
          placeholder="Seu nome completo"
          value={data.name}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Qual sua data de nascimento?</label>
        <input
          type="date"
          name="birthDate"
          value={data.birthDate}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Seu Telefone?</label>
        <input
          type="tel"
          name="phone"
          placeholder="+55 (__) _____-____"
          value={data.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-button-group">
        <button type="button" className="form-button next" onClick={onNext}>
          Próximo →
        </button>
</div>

    </form>
  );
};

export default Step1;
