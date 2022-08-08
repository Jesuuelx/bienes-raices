import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stepAditionalInformation } from "../../store/steps/stepsSlice";

export const AdditionalStep = ({stepFive}) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    navigate(stepFive.pathTo, {replace:true});
  };

  return (
    <>
      <h1 className="step__title">
        Paso 5 de 5: <br />{" "}
        <span className="step__intro-title"> {stepFive.name} Opcional *</span>
      </h1>
      <h2 className="mb-10 step__solicita">{stepFive.description}</h2>
      <hr />

      <form onSubmit={onSubmit} className="step__form-direccion"
      aria-label="adicional-step">
        <div className="step__label">
          <label className="mb-5"> Zona BBQ </label>
          <input
            type="checkbox"
            value="Zona BBQ"
            name="input1"
            className="step__input-adicional"
            autoComplete="off"
            onChange={() => dispatch(stepAditionalInformation(1))}
            data-testid='input1'
          />
        </div>
        <br />
        <div className="step__label">
          <label className="mb-5"> Salon Comunal </label>
          <input
            type="checkbox"
            value="Salon Comunal"
            name="input2"
            className="step__input-adicional" 
            autoComplete="off"
            onChange={() => dispatch(stepAditionalInformation(2))}
            data-testid='input2'
          />
        </div>
        <div className="step__label">
          <label className="mb-5"> Parque de juegos </label>
          <input
            type="checkbox"
            value="Parque de juegos"
            name="input3"
            className="step__input-adicional"
            autoComplete="off"
            onChange={() => dispatch(stepAditionalInformation(3))}
            data-testid='input3'
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary step__bold">
          Siguiente
        </button>
      </form>
    </>
  );
};
