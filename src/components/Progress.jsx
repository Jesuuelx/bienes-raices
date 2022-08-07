import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const Progress = () => {
  const { displayName, email, address, floor, aditionalInformation } =
    useSelector((state) => state.steps);

  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="progress__container">
      {/*   <!-- completed -->progress__completed */}
      <h1>Proceso Formulario:</h1>
      <hr />
      <br />
      <div
        className={`progress__step ${
          pathname === "/nombre-usuario" && "progress__active"
        } ${displayName !== null && "progress__completed"}`}
      >
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">Nombre:</div>
      </div>

      <div className="progress__step progress__empty">
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">{displayName}</div>
      </div>

      {/*   <!-- active --> progress__active */}
      <div
        className={`progress__step ${
          pathname === "/correo-usuario" ? "progress__active" : ""
        } ${email !== null && "progress__completed"}`}
      >
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">Email:</div>
      </div>
      {/*  
      <!-- empty --> */}
      <div className="progress__step progress__empty">
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">{email}</div>
      </div>

      {/*  <!-- regular --> */}
      <div
        className={`progress__step ${
          pathname === "/direccion" ? "progress__active" : ""
        } ${address !== null && "progress__completed"}`}
      >
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">Direccion:</div>
      </div>
      <div className="progress__step progress__empty">
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">{address}</div>
      </div>

      {/*  <!-- regular --> */}
      <div
        className={`progress__step ${
          pathname === "/datos-piso" ? "progress__active" : ""
        } ${floor !== null && "progress__completed"}`}
      >
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">Piso</div>
      </div>
      <div className="progress__step progress__empty">
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">{floor}</div>
      </div>

      {/*  <!-- regular --> */}
      <div
        className={`progress__step ${
          pathname === "/caracteristicas" ? "progress__active" : ""
        } ${pathname === "/resumen" && "progress__completed"}`}
      >
        <div className="progress__v-stepper">
          <div className="progress__circle"></div>
          <div className="progress__line"></div>
        </div>

        <div className="progress__content">
          Caracteristicas
          <ul>
            {aditionalInformation.map((info) => (
              <li key={info.id}>{info.done && info.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
