import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Progress } from "../components/Progress";
import { useModal } from "../hooks/useModal";
import {
  NameStep,
  EmailStep,
  AddressStep,
  FloorStep,
  AdditionalStep,
  Resumen,
} from "../steps/pages";
import steps from "../steps.json";

export const AppRouter = () => {
  const { displayName, email, address, floor } = useSelector(
    (state) => state.steps
  );

  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div className="step__main">
      <div className="step__box-container1">
        <Routes>
          <Route
            path="/nombre-usuario"
            element={<NameStep stepOne={steps[0]} />}
          />

          {displayName !== null ? (
            <Route path="/correo-usuario" element={<EmailStep stepTwo={steps[1]} />} />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}

          {email !== null ? (
            <Route path="/direccion" element={<AddressStep stepThree={ steps[2] } />} />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}
          {address !== null ? (
            <Route path="/datos-piso" element={<FloorStep stepFour={ steps[3] } />} />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}

          {floor !== null ? (
            <Route
              path="/caracteristicas-adicional"
              element={<AdditionalStep stepFive={steps[4]} />}
            />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}
          {floor !== null ? (
            <Route path="/resumen" element={<Resumen stepSix={steps[5]} />} />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}

          <Route path="/*" element={<Navigate to="/nombre-usuario" />} />
        </Routes>
        <div>
          <button onClick={openModal} className={"btn-modal"}>
            Ver tu Resumen
          </button>
          <Modal isOpen={isOpen} closeModal={closeModal} />
        </div>
      </div>
      <div className="step__box-step mt-5">
        <Progress />
      </div>
    </div>
  );
};
