import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Progress } from "../../components/Progress";
import { stepsSlice } from "../../store/steps/stepsSlice";


const store = configureStore({
    reducer: {
      steps: stepsSlice.reducer,
    },
    /*    preloadedState: {
            steps:
        } */
  });


describe('test in <Progress />', () => { 


    test('should make to match with snapchot', () => { 

        const { container } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <Progress />
                </MemoryRouter>
            </Provider>
        );

        expect( container ).toMatchSnapshot();



     })

 })