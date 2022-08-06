import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { stepAddress } from "../../store/steps/stepsSlice";

const formValidations = {
  ciudad: [(value) => value.length >= 1, "El campo es obligatorio."],
  via: [(value) => value.length >= 1, "El campo es obligatorio."],
  nro1: [(value) => value.length >= 1, "El campo es obligatorio."],
  nro2: [(value) => value.length >= 1, "El campo es obligatorio."],
  nro3: [(value) => value.length >= 1, "El campo es obligatorio."],
};

const formData = {
  ciudad: "",
  via: "",
  nro1: "",
  nro2: "",
  nro3: "",
};

export const AddressStep = () => {
  const [submmited, setSubmmited] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    ciudad,
    onInputChange,
    onResetForm,
    isFormValid,
    ciudadValid,
    via,
    viaValid,
    nro1,
    nro1Valid,
    nro2,
    nro2Valid,
    nro3,
    nro3Valid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmmited(true);
    if (!isFormValid) return;
    dispatch(stepAddress({ address:`${ciudad} ${via} ${nro1} ${nro2} ${nro3}` }));
    navigate("/datos-piso", {
      replace: true,
    });
    onResetForm();
  };

  return (
    <>
      <h1 className="step__title">
        Paso 3 de 5: <br />{" "}
        <span className="step__intro-title"> Direccion *</span>
      </h1>
      <h2 className="mb-10 step__solicita">
        ¿A que correo quieres que nos comuniquemos contigo?
      </h2>
      <hr />

      <form onSubmit={onSubmit} className="step__form-direccion">
        <div>
          <h4 className="mb-5"> Ciudad: </h4>
          <input
            type="text"
            placeholder="Ciudad"
            onChange={onInputChange}
            value={ciudad}
            name="ciudad"
            className="step__input-direccion"
            autoComplete="off"
          />
             {submmited && <p className="step__alert-error-direccion"> {ciudadValid} </p>}
        </div>
        <div>
          <h4 className="mb-5"> Via: </h4>
          <input
            type="text"
            placeholder="Calle/Carrera"
            onChange={onInputChange}
            value={via}
            name="via"
            className="step__input-direccion"
            autoComplete="off"
          />
             {submmited && <p className="step__alert-error-direccion"> {viaValid} </p>}
        </div>

        <div>
          <h4 className="mb-5"> Numero </h4>
          <input
            type="number"
            onChange={onInputChange}
            value={nro1}
            name="nro1"
            className="step__input-direccion"
            autoComplete="off"
          />
             {submmited && <p className="step__alert-error-direccion"> {nro1Valid} </p>}
        </div>
        <div>
          <h4 className="mb-5"> # </h4>
          <input
            type="number"
            onChange={onInputChange}
            value={nro2}
            name="nro2"
            className="step__input-direccion"
            autoComplete="off"
          />
             {submmited && <p className="step__alert-error-direccion"> {nro2Valid} </p>}
        </div>
        <div>
          <h4 className="mb-5"> - </h4>

          <input
            type="number"
            onChange={onInputChange}
            value={nro3}
            name="nro3"
            className="step__input-direccion"
            autoComplete="off"
          />
             {submmited && <p className="step__alert-error-direccion"> {nro3Valid} </p>}
        </div>
        <br />
        <button type="submit" className="btn btn-primary step__bold">Siguiente</button>
      </form>
    </>
  );
};
