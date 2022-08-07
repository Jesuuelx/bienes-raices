import {
  stepAddress,
  stepAditionalInformation,
  stepDisplayName,
  stepEmail,
  stepFloor,
  stepsSlice,
} from "../../../store/steps/stepsSlice";
import {
  fivethState,
  fourState,
  initialState,
  secondState,
  threeState,
} from "../../fixtures/stepsFixtures";

describe("Testing in stepsSlice", () => {
  test("should return the initial state and named steps", () => {
    const state = stepsSlice.reducer(initialState, {});

    expect(state).toEqual(initialState);

    expect(stepsSlice.name).toBe("steps");
  });

  test("should execute the first step of form, sending the displayName", () => {
    const state = stepsSlice.reducer(
      initialState,
      stepDisplayName({ name: "Jesus Salas" })
    );

    expect(state).toEqual({
      displayName: "Jesus Salas",
      email: null,
      address: null,
      floor: null,
      aditionalInformation: [
        { name: "zonabbq", done: false, id: 1 },
        { name: "parque de juegos", done: false, id: 2 },
        { name: "salon comunal", done: false, id: 3 },
      ],
      isLoading: false,
    });
  });

  test("should execute the second step of form, sending the email", () => {
    const state = stepsSlice.reducer(
      secondState,
      stepEmail({ email: "jesus@hotmail.com" })
    );

    expect(state).toEqual({
      displayName: "Jesus Salas",
      email: "jesus@hotmail.com",
      address: null,
      floor: null,
      aditionalInformation: [
        { name: "zonabbq", done: false, id: 1 },
        { name: "parque de juegos", done: false, id: 2 },
        { name: "salon comunal", done: false, id: 3 },
      ],
      isLoading: false,
    });
  });

  test("should execute the third step of form, sending the address", () => {
    const state = stepsSlice.reducer(
      threeState,
      stepAddress({ address: "Calle 174 8 30" })
    );

    expect(state).toEqual({
      displayName: "Jesus Salas",
      email: "jesus@hotmail.com",
      address: "Calle 174 8 30",
      floor: null,
      aditionalInformation: [
        { name: "zonabbq", done: false, id: 1 },
        { name: "parque de juegos", done: false, id: 2 },
        { name: "salon comunal", done: false, id: 3 },
      ],
      isLoading: false,
    });
  });

  test("should execute the fourth step of form, sending the floor ", () => {
    const state = stepsSlice.reducer(fourState, stepFloor({ floor: "Piso 8" }));

    expect(state).toEqual({
      displayName: "Jesus Salas",
      email: "jesus@hotmail.com",
      address: "Calle 174 8 30",
      floor: "Piso 8",
      aditionalInformation: [
        { name: "zonabbq", done: false, id: 1 },
        { name: "parque de juegos", done: false, id: 2 },
        { name: "salon comunal", done: false, id: 3 },
      ],
      isLoading: false,
    });
  });

  test("should execute the fiveth step of form, sending the aditional information(optional)", () => {
    const state = stepsSlice.reducer(fivethState, stepAditionalInformation());

    const stateSentInformation = stepsSlice.reducer(
      fivethState,
      stepAditionalInformation(1)
    );

    expect(state).toEqual({
      displayName: "Jesus Salas",
      email: "jesus@hotmail.com",
      address: "Calle 174 8 30",
      floor: "Piso 8",
      aditionalInformation: [
        { name: "zonabbq", done: false, id: 1 },
        { name: "parque de juegos", done: false, id: 2 },
        { name: "salon comunal", done: false, id: 3 },
      ],
      isLoading: false,
    });

    expect(stateSentInformation).toEqual({
      displayName: "Jesus Salas",
      email: "jesus@hotmail.com",
      address: "Calle 174 8 30",
      floor: "Piso 8",
      aditionalInformation: [
        { name: "zonabbq", done: true, id: 1 },
        { name: "parque de juegos", done: false, id: 2 },
        { name: "salon comunal", done: false, id: 3 },
      ],
      isLoading: false,
    });
  });
});
