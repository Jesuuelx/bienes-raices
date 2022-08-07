import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { stepsSlice } from "../../../store/steps/stepsSlice";
import { EmailStep } from "../../../steps/pages";

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

describe("Test in <EmailStep />", () => {
  
    beforeEach(() => jest.clearAllMocks());
    test("should make to match with Snapchot", () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <EmailStep />
        </MemoryRouter>
      </Provider>
    );

    expect(container).toMatchSnapshot();
  });

  test("should show a copy at h2", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <EmailStep />
        </MemoryRouter>
      </Provider>
    );

    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toBe('¿A que correo quieres que nos comuniquemos contigo?'
    );
  });

  test('should press onSubmit and navigate to /address', () => { 

   render( <Provider store={store}>
    <MemoryRouter initialEntries={['/correo-usuario']}>
      <EmailStep />
    </MemoryRouter>
  </Provider>
   )
const input = screen.getByRole("textbox");
fireEvent.change(input, {
  target: { name: "email", value: "jesus@hotmail.com" },
});

const stepBtn = screen.getByLabelText("step-two-form");
fireEvent.submit(stepBtn);

expect( mockedUseNavigate ).toBeCalledWith('/direccion', {"replace": true});

   })

});
