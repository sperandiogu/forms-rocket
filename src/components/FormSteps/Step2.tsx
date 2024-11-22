import React from "react";
import FormHeader from "../FormHeader";

interface Step2Props {
data: { guardianName: string; guardianPhone: string; medicalInfo: string };
setData: React.Dispatch<React.SetStateAction<any>>;
  onNext: () => void;
  onPrevious: () => void;
  }

  const Step2: React.FC<Step2Props> = ({ data, setData, onNext, onPrevious }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [e.target.name]: e.target.value });
      };

      return (
      <form>
        <FormHeader />
        <h1 className="form-title">Informações do Responsável</h1>
        <p className="form-subtitle">
          Precisamos de algumas informações dos seus responsáveis, assim temos um contato mais rápido com eles!
        </p>
        <div className="form-group">
          <label>Nome do Responsável</label>
          <input type="text" name="guardianName" placeholder="Nome do responsável" value={data.guardianName}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Telefone do Responsável</label>
          <input type="tel" name="guardianPhone" placeholder="+55 (__) _____-____" value={data.guardianPhone}
            onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Alguma Informação Médica?</label>
          <input type="text" name="medicalInfo" placeholder="Alergias, condições de saúde, etc."
            value={data.medicalInfo} onChange={handleChange} />
        </div>
        <div className="form-button-group">
          <button type="button" className="form-button previous" onClick={onPrevious}>
            ← Voltar
          </button>
          <button type="button" className="form-button next" onClick={onNext}>
            Próximo →
          </button>
        </div>

      </form>
      );
      };

      export default Step2;
