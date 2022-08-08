import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { stepsSlice } from "../../../store/steps/stepsSlice";
import { AdditionalStep } from "../../../steps/pages";
import steps from "../../../steps.json";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));

describe("Test in <AdditionalStep />", () => {
  beforeEach(() => jest.clearAllMocks());
  const store = configureStore({
    reducer: {
      steps: stepsSlice.reducer,
    },
    /*    preloadedState: {
                  steps:
              } */
  });

  test("should match with the snapchot", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <AdditionalStep stepFive={steps[4]} />
        </MemoryRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test("should have a h1 ", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <AdditionalStep stepFive={steps[4]} />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("heading", { level: 1 })).toBeTruthy();
  });

  test("should press a button submit and navigate to /resumen", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/caracteristicas-adicional"]}>
          <AdditionalStep stepFive={steps[4]} />
        </MemoryRouter>
      </Provider>
    );

    const inputBbq = screen.getByTestId("input1");
    fireEvent.change(inputBbq, {
      target: { name: "input1", value: "Zona bbq" },
    });

    const inputSalon = screen.getByTestId("input2");
    fireEvent.change(inputSalon, {
      target: { name: "input2", value: "Salon Comunal" },
    });

    const inputParque = screen.getByTestId("input3");
    fireEvent.change(inputParque, {
      target: { name: "input3", value: "Parque de juegos" },
    });

    const stepBtn = screen.getByLabelText("adicional-step");
    fireEvent.submit(stepBtn);

    expect(mockedUseNavigate).toBeCalledWith("/resumen", { replace: true });
  });
});
