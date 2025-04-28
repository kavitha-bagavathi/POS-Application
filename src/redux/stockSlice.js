import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stock: JSON.parse(localStorage.getItem("stockData")) || [],
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.stock.push(action.payload);
      localStorage.setItem("stockData", JSON.stringify(state.stock));
    },
    updateItem: (state, action) => {
      const index = state.stock.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.stock[index] = action.payload;
        localStorage.setItem("stockData", JSON.stringify(state.stock));
      }
    },
    setStock: (state, action) => {
      state.stock = action.payload;
      localStorage.setItem("stockData", JSON.stringify(state.stock));
    },
  },
});

export const { addItem, updateItem, setStock } = stockSlice.actions;
export default stockSlice.reducer;
