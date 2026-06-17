import { createSlice } from '@reduxjs/toolkit';
import { mockProducts } from '../../data/mockProducts';

const initialState = {
  items: mockProducts,
  activeItemId: mockProducts[0].id,
  screen: 'list',
  lastUpdatedItemId: null,
  confirmationVisible: false
};

const fittingRoomSlice = createSlice({
  name: 'fittingRoom',
  initialState,
  reducers: {
    openItem: (state, action) => {
      state.activeItemId = action.payload;
      state.screen = 'detail';
      state.confirmationVisible = false;
    },
    goToList: (state) => {
      state.screen = 'list';
    },
    updateItemSelection: (state, action) => {
      const { id, color, size } = action.payload;
      const item = state.items.find((product) => product.id === id);
      if (item) {
        item.selectedColor = color ?? item.selectedColor;
        item.selectedSize = size ?? item.selectedSize;
      }
      state.lastUpdatedItemId = id;
      state.confirmationVisible = true;
      state.screen = 'list';
    },
    hideConfirmation: (state) => {
      state.confirmationVisible = false;
    }
  }
});

export const { openItem, goToList, updateItemSelection, hideConfirmation } =
  fittingRoomSlice.actions;

export default fittingRoomSlice.reducer;
