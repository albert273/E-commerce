import { configureStore } from "@reduxjs/toolkit";
import productCartSlice  from "./slice/SliceToCart";
import productSlice from "./slice/ProductSlice";
import ArchiveSlice from "./slice/ArchiveSlice";

export const store = configureStore({
  reducer: {
      // @ts-ignore
      cart: productCartSlice,
      products: productSlice,
      archive: ArchiveSlice,
  }
})