import { Provider } from "react-redux";
import { stepsSlice } from "../../../store/steps/stepsSlice";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";
import { FloorStep } from "../../../steps/pages/FloorStep";
import steps from "../../../steps.json";

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
  


describe('Test in <Floor />', () => { 


    test('should make to match with the snapchot', () => { 

        const { container } = render(
            <Provider store={store}>
              <MemoryRouter>
                <FloorStep stepFour={steps[3]} />
              </MemoryRouter>
            </Provider>
          );
      
          expect(container).toMatchSnapshot();


    });

    test('should show a h4:Piso:', () => { 

        render(
            <Provider store={store}>
              <MemoryRouter>
                <FloorStep stepFour={steps[3]} />
              </MemoryRouter>
            </Provider> ) ;



            expect( screen.getByRole('heading', {level:4}).innerHTML).toContain('Piso')

     });

     test('should press submit and navigate to /caracteristicas-adicional', () => { 

        render(
            <Provider store={store}>
              <MemoryRouter initialEntries={['/datos-piso']}>
                <FloorStep stepFour={steps[3]} />
              </MemoryRouter>
            </Provider>
          );
      
          const input = screen.getByTestId("input-floor");
          fireEvent.change(input, {
            target: { name: "floor", value:"3" },
          });
      
          const stepBtn = screen.getByLabelText("form-floor");
          fireEvent.submit(stepBtn);
      
          expect( mockedUseNavigate ).toBeCalledWith('/caracteristicas-adicional', {"replace": true});
      

      })



 })