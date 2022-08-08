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

export const AppRouter = () => {
  const { displayName, email, address, floor } = useSelector(
    (state) => state.steps
  );

  const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div className="step__main">
      <div className="step__box-container1">
        <Routes>
          <Route path="/nombre-usuario" element={<NameStep />} />

          {displayName !== null ? (
            <Route path="/correo-usuario" element={<EmailStep />} />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}

          {email !== null ? (
            <Route path="/direccion" element={<AddressStep />} />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}
          {address !== null ? (
            <Route path="/datos-piso" element={<FloorStep />} />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}

          {floor !== null ? (
            <Route
              path="/caracteristicas-adicional"
              element={<AdditionalStep />}
            />
          ) : (
            <Route path="/nombre-usuario" element={<NameStep />} />
          )}
          {floor !== null ? (
            <Route path="/resumen" element={<Resumen />} />
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
