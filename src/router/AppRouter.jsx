import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Progress } from "../components/Progress";
import {
  NameStep,
  EmailStep,
  AddressStep,
  FloorStep,
  AdditionalStep,
} from "../steps/pages";

export const AppRouter = () => {
  return (
    <div className="step__main">
      <div className="step__box-container1">
        <Routes>
          <Route path="/nombre-usuario" element={<NameStep />} />
          <Route path="/correo-usuario" element={<EmailStep />} />
          <Route path="/direccion" element={<AddressStep />} />
          <Route path="/datos-piso" element={<FloorStep />} />
          <Route
            path="/caracteristicas-adicional"
            element={<AdditionalStep />}
          />

          <Route path="/*" element={<Navigate to="/nombre-usuario" />} />
        </Routes>
      </div>
      <div className="step__box-step mt-5">
        <Progress />
      </div>
    </div>
  );
};
