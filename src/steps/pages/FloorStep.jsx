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

export const FloorStep = ({stepFour}) => {
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
    dispatch(stepFloor({ floor:'Piso ' + floor }));
      navigate(stepFour.pathTo, {replace:true});
    onResetForm();
  };

  return (
    <>
      <h1 className="step__title">
        Paso 4 de 5: <br />{" "}
        <span className="step__intro-title"> {stepFour.description}*</span>
      </h1>
      <hr />
      <h4 className="mb-5">{stepFour.name}</h4>

      <form onSubmit={onSubmit} className="step__form" aria-label="form-floor">
        <input
          type="number"
          onChange={onInputChange}
          value={floor}
          name="floor"
          className="step__input"
          autoComplete="off"
          data-testid={'input-floor'}
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
