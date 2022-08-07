import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { stepsSlice } from "../../../store/steps/stepsSlice";
import { AddressStep } from "../../../steps/pages";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
    


describe('Test in <AddressStep />', () => { 

    beforeEach(() => jest.clearAllMocks());
        const store = configureStore({
            reducer: {
              steps: stepsSlice.reducer,
            },
            /*    preloadedState: {
                  steps:
              } */
          });


        test('should match with the snapchot', () => { 

            const { container } = render(
                <Provider store={store}>
                    <MemoryRouter>

                <AddressStep />

                    </MemoryRouter>
                </Provider>
            );

            expect( container ).toMatchSnapshot();

         });

         test('should show a copy h2:Danos tu direccion', () => { 

            render(
                <Provider store={store}>
                    <MemoryRouter>

                <AddressStep />

                    </MemoryRouter>
                </Provider>
            );

            expect( screen.getByRole('heading', {level:2}).innerHTML).toContain('Danos tu direccion');

            



          });

          test('should have a h1 ', () => { 

            render(
                <Provider store={store}>
                    <MemoryRouter>

                <AddressStep />

                    </MemoryRouter>
                </Provider>
            );

            expect( screen.getByRole('heading', {level:1}) ).toBeTruthy();


           })

           test('should press a button submit and navigate to /datos-piso', () => { 

           render(
            <Provider store={store}>
            <MemoryRouter>

        <AddressStep />

            </MemoryRouter>
        </Provider>
           );
           
           
           
            const inputCity = screen.getByTestId("input-ciudad");
            fireEvent.change(inputCity, {
              target: { name: "ciudad", value: "Bogota" },
            });

            
            const inputVia = screen.getByTestId("input-via");
            fireEvent.change(inputVia, {
              target: { name: "via", value: "Calle" },
            });

            
            const inputNro1 = screen.getByTestId("input-nro1");
            fireEvent.change(inputNro1, {
              target: { name: "nro1", value: "174" },
            });

            
            const inputNro2 = screen.getByTestId("input-nro2");
            fireEvent.change(inputNro2, {
              target: { name: "nro2", value: "8" },
            });

            
            const inputNro3 = screen.getByTestId("input-nro3");
            fireEvent.change(inputNro3, {
              target: { name: "nro3", value: "30" },
            });
            
            const stepBtn = screen.getByLabelText("step-direccion");
            fireEvent.submit(stepBtn);
            
            expect( mockedUseNavigate ).toBeCalledWith('/datos-piso', {"replace": true});



            })


     })