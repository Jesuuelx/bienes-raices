import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stepAditionalInformation } from "../../store/steps/stepsSlice";

export const AdditionalStep = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const onSubmit = (e) => {
    e.preventDefault();
    
    navigate('/resumen', {replace:true});
  };

  return (
    <>
      <h1 className="step__title">
        Paso 5 de 5: <br />{" "}
        <span className="step__intro-title"> Opcional *</span>
      </h1>
      <h2 className="mb-10 step__solicita">Elige si es tu caso</h2>
      <hr />

      <form onSubmit={onSubmit} className="step__form-direccion">
        <div>
          <label className="mb-5"> Zona BBQ </label>
          <input
            type="checkbox"
            value="Zona BBQ"
            name="input"
            className="step__input-adicional"
            autoComplete="off"
            onChange={() => dispatch(stepAditionalInformation(1))}
          />
        </div>
        <br />
        <div>
          <label className="mb-5"> Salon Comunal </label>
          <input
            type="checkbox"
            value="Salon Comunal"
            name="input"
            className="step__input-adicional"
            autoComplete="off"
            onChange={() => dispatch(stepAditionalInformation(2))}
          />
        </div>
        <div>
          <label className="mb-5"> Parque de juegos </label>
          <input
            type="checkbox"
            value="Parque de juegos"
            name="input"
            className="step__input-adicional"
            autoComplete="off"
            onChange={() => dispatch(stepAditionalInformation(3))}
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
