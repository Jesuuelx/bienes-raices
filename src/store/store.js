import { configureStore } from '@reduxjs/toolkit'
import { stepsSlice } from './steps/stepsSlice'

export const store = configureStore({
  reducer: {
    steps:stepsSlice.reducer,
  },
})