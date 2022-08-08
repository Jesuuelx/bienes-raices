import { render } from "@testing-library/react";
import { Modal } from "../../components/Modal";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { stepsSlice } from "../../store/steps/stepsSlice";


const store = configureStore({
    reducer: {
      steps: stepsSlice.reducer,
    },
    /*    preloadedState: {
            steps:
        } */
  });
describe('Test in Modal', () => { 

    const closeModal = jest.fn
    const isOpen = false;

    test('show Snapchot', () => { 

        const { container } = render(
           
           <Provider store={store}>

            <MemoryRouter>

               <Modal closeModal={closeModal} isOpen={isOpen} />

            </MemoryRouter>

           </Provider>
        )

        expect( container ).toMatchSnapshot();


     })


 })