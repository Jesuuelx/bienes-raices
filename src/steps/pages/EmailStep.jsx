import { useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { stepEmail } from "../../store/steps/stepsSlice";

const formValidations = {
  email: [
    (value) =>
      value.includes("@") &&
      !value.includes("@@") &&
      !value.includes("(") &&
      !value.includes(")") &&
      !value.includes(",") &&
      !value.includes("<") &&
      !value.includes(">") &&
      !value.includes(":") &&
      !value.includes("[") &&
      !value.includes("]") &&
      !value.includes(" ") &&
      !value.includes("%") &&
      !value.includes("&") &&
      !value.includes(";"),
    "Introduce un correo electronico valido",
  ],
};

const formData = {
  email: "",
};

export const EmailStep = () => {
  const [submmited, setSubmmited] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { email, onInputChange, onResetForm, isFormValid, emailValid } =
    useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmmited(true);
    if (!isFormValid) return;
    dispatch(stepEmail({ email: email }));
    navigate("/direccion", { replace: true });
    onResetForm();
  };

  return (
    <>
      <h1 className="step__title">Paso 2 de 5:<br />{" "}
        <span className="step__intro-title"> Correo Electronicó *</span>
      </h1>
      <h2 className="mb-10 step__solicita">
        ¿A que correo quieres que nos comuniquemos contigo?
      </h2>
      <hr />
      <h4 className="mb-5"> Correo: </h4>

      <form onSubmit={onSubmit} className="step__form"
      aria-label="step-two-form">
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={onInputChange}
          value={email}
          name="email"
          className="step__input"
          autoComplete="off"
        />
        {submmited && <p className="step__alert-error"> {emailValid} </p>}
        <br />
        <button type="submit" className="btn btn-primary step__bold">
          Siguiente
        </button>
      </form>
    </>
  );
};
