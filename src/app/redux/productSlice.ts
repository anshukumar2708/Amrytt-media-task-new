// store/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductStatus = "All Product" | "Published" | "Low Stock" | "Draft";

export interface Product {
  id: number;
  name: string;
  variants: number;
  image: string;
  sku: string;
  category: string;
  stock: number;
  price: string;
  status: ProductStatus;
  added: string;
}

interface ProductState {
  list: Product[];
  filterStatus: ProductStatus;
  searchTerm: string;
}

const initialState: ProductState = {
  list: [
    {
      id: 1,
      name: "Handmade Pouch",
      variants: 3,
      image: "",
      sku: "302012",
      category: "Bag & Pouch",
      stock: 10,
      price: "$121.00",
      status: "Low Stock",
      added: "29 Dec 2022",
    },
    {
      id: 2,
      name: "Smartwatch E2",
      variants: 2,
      image: "",
      sku: "302011",
      category: "Watch",
      stock: 204,
      price: "$590.00",
      status: "Published",
      added: "24 Dec 2022",
    },
    {
      id: 3,
      name: "Smartwatch E1",
      variants: 3,
      image: "",
      sku: "302002",
      category: "Watch",
      stock: 48,
      price: "$125.00",
      status: "Draft",
      added: "12 Dec 2022",
    },
    {
      id: 4,
      name: "Headphone G1 Pro",
      variants: 1,
      image: "",
      sku: "301901",
      category: "Audio",
      stock: 401,
      price: "$348.00",
      status: "Published",
      added: "21 Oct 2022",
    },
    {
      id: 5,
      name: "Iphone X",
      variants: 4,
      image: "",
      sku: "301900",
      category: "Smartphone",
      stock: 120,
      price: "$607.00",
      status: "Published",
      added: "21 Oct 2022",
    },
  ],
  filterStatus: "All Product",
  searchTerm: "",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.list.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<Product>) => {
      const index = state.list.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((p) => p.id !== action.payload);
    },
    setFilterStatus: (state, action: PayloadAction<ProductStatus>) => {
      state.filterStatus = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload.toLowerCase();
    },
  },
});

export const {
  addProduct,
  updateProduct,
  deleteProduct,
  setFilterStatus,
  setSearchTerm,
} = productSlice.actions;
export default productSlice.reducer;
