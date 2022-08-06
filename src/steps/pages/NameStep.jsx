import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { stepDisplayName } from "../../store/steps/stepsSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const formData = {
  displayName: "",
};

const formValidations = {
  displayName: [(value) => value.length >= 1, "El campo es obligatorio."],
};
export const NameStep = () => {
  const [submmited, setSubmmited] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const {
    displayName,
    onInputChange,
    onResetForm,
    isFormValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmmited(true);
    if (!isFormValid) return;
    dispatch(stepDisplayName({ name: displayName }));
    navigate('/correo-usuario', {replace:true})
    onResetForm();
  };



  return (
    <>
      <h1 className="step__title">
        Compramos <br />{" "}
        <span className="step__intro-title"> tu vivienda en 10 dias *</span>
      </h1>
      <h2 className="mb-10 step__solicita">¡Solicita una oferta gratis!</h2>
      <hr />
      <h3 className="mb-5 step__subtitle">Paso 1 de 5: Datos de registro</h3>
      <h4 className="mb-5"> ¿Quién recibirá la oferta? </h4>

      <form onSubmit={onSubmit} className="step__form">
        <p className="step__bold">Nombre y Apellido</p>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={onInputChange}
          value={displayName}
          name="displayName"
          className="step__input"
          autoComplete="off"
        />
          {submmited && <p className="step__alert-error"> {displayNameValid} </p>}
          <br />
        <button type="submit" className="btn btn-primary step__bold">Siguiente</button>

      
      </form>
    </>
  );
};
