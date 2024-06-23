import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productSlice/fetchProducts",
  async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    return data;
  }
);

export const productSlice = createSlice({
  initialState: [],
  name: "productSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export const {} = productSlice.actions;

export default productSlice.reducer;
