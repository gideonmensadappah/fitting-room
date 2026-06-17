import { configureStore } from '@reduxjs/toolkit';
import fittingRoomReducer from '../features/fittingRoom/fittingRoomSlice';

export const store = configureStore({
  reducer: {
    fittingRoom: fittingRoomReducer
  }
});
