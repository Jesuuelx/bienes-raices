import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { stepFloor } from "../../store/steps/stepsSlice";

const formValidations = {
  floor: [(value) => value.length >= 1 &&  value < 51 && value > 0 , "Debe introducir un valor valido ([1,  50])"],
};

const formData = {
  floor: "",
};

export const FloorStep = () => {
  const [submmited, setSubmmited] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    floor,
    onInputChange,
    onResetForm,
    isFormValid,
    floorValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmmited(true);
    if (!isFormValid) return;
    dispatch(stepFloor({ floor: floor + 'piso' }));
      navigate('/caracteristicas-adicional', {replace:true});
    onResetForm();
  };

  return (
    <>
      <h1 className="step__title">
        Paso 4 de 5: <br />{" "}
        <span className="step__intro-title"> Piso de tu apartamento*</span>
      </h1>
      <hr />
      <h4 className="mb-5"> Piso: </h4>

      <form onSubmit={onSubmit} className="step__form">
        <input
          type="number"
          placeholder="Ingresa tu nombre"
          onChange={onInputChange}
          value={floor}
          name="floor"
          className="step__input"
          autoComplete="off"
        />

        {submmited && <p className="step__alert-error"> {floorValid} </p>}
        <br />
        <button type="submit" className="btn btn-primary step__bold">
          Siguiente
        </button>
      </form>
    </>
  );
};
