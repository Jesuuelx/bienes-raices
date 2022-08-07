import { useSelector } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { Progress } from "../components/Progress";
import {
  NameStep,
  EmailStep,
  AddressStep,
  FloorStep,
  AdditionalStep,
  Resumen,
} from "../steps/pages";

export const AppRouter = () => {
  const { displayName, email, address, floor, aditionalInformation } =
    useSelector((state) => state.steps);

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
      </div>
      <div className="step__box-step mt-5">
        <Progress />
      </div>
    </div>
  );
};
