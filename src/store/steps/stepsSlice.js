import { createSlice } from "@reduxjs/toolkit";

export const stepsSlice = createSlice({
  name: "steps",
  initialState: {
    displayName: null,
    email: null,
    address: null,
    floor: null,
    aditionalInformation: [
      {
        name: "zonabbq",
        done: false,
        id: 1,
      },
      {
        name: "parque de juegos",
        done: false,
        id: 2,
      },
      {
        name: "salon comunal",
        done: false,
        id: 3,
      },
    ],
    isLoading: false,
  },
  reducers: {
    stepDisplayName: (state, { payload }) => {
      state.displayName = payload.name;
    },
    stepEmail: (state, { payload }) => {
      state.email = payload.email;
    },
    stepAddress: (state, { payload }) => {
      state.address = payload.address;
    },
    stepFloor: (state, { payload }) => {
      state.floor = payload.floor;
    },
    stepAditionalInformation: (state, { payload }) => {
      const newState = state.aditionalInformation.map((info) =>
        info.id === payload ? { ...info, done: !info.done } : info
      );
      state.aditionalInformation = newState;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
  },
});
export const {
  stepDisplayName,
  stepEmail,
  stepAddress,
  stepFloor,
  stepAditionalInformation,
  startLoading,
} = stepsSlice.actions;
