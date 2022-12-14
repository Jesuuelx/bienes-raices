import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { NameStep } from "../../../steps/pages/NameStep";
import { Provider } from "react-redux";
import { stepsSlice } from "../../../store/steps/stepsSlice";
import { MemoryRouter } from "react-router-dom";
import steps from '../../../steps.json'

const store = configureStore({
  reducer: {
    steps: stepsSlice.reducer,
  },
  /*    preloadedState: {
        steps:
    } */
});

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Testing in <NameStep />", () => {
  beforeEach(() => jest.clearAllMocks());

  test("should show the  component", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <NameStep stepOne={steps[0]} />
        </MemoryRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();

    expect( screen.getByRole('heading', {level:3}).innerHTML ).toBe('Paso 1 de 5: Datos de registro');
  });

  test("should make a submit and navigate to /correo-usuario", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/datos-usuario']}>
          <NameStep stepOne={steps[0]} />
        </MemoryRouter>
      </Provider>
    );

    const input = screen.getByRole("textbox");
    fireEvent.change(input, {
      target: { name: "displayName", value: "Jesus Salas" },
    });

    const stepBtn = screen.getByLabelText("step-one-btn");
    fireEvent.submit(stepBtn);

    expect( mockedUseNavigate ).toBeCalledWith(steps[0].pathTo, {"replace": true});

    
  });
});
