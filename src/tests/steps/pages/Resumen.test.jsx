import { render } from "@testing-library/react";
import { Resumen } from "../../../steps/pages";
import steps from "../../../steps.json";
describe('Test in <Resumen />', () => { 

    test('should make to match with the snapchot', () => { 


        const { container } = render(  <Resumen stepSix={steps[5]} /> );

        expect( container ).toMatchSnapshot();


     })

 })