import React from "react";

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
      <h1 className="form-title"><b>RCKT CAMP 2025 | </b>Se prepare para o <b>AVIVAMENTO</b></h1>
      <p className="form-subtitle">
        Viveremos coisas incríveis e precisamos que você preencha todas as
        informações, assim poderemos te direcionar da melhor maneira.
      </p>
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
