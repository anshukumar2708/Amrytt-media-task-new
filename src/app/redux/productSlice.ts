// store/productSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ProductStatus = "All Product" | "Published" | "Low Stock" | "Draft";

type IVariation = {
  type: string;
  value: string;
};

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  tags: string[];
  status: string;
  price: string;
  discountType: string;
  discountPercentage: number;
  taxClass: string;
  vatAmount: number;
  sku: string;
  barcode: string;
  quantity: number;
  variationTypes: string[];
  variations: IVariation[];
  isPhysical: boolean;
  stock: number;
  weight: number;
  height: number;
  length: number;
  width: number;
  added: string;
  variants: number;
  image: string;
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
      name: "Smartphone X1",
      description: "High-end smartphone with 128GB storage",
      category: "Electronics",
      tags: ["smartphone", "electronics", "gadget"],
      status: "Published",
      price: "699.99",
      discountType: "Percentage",
      discountPercentage: 10,
      taxClass: "Standard",
      vatAmount: 14,
      sku: "SPX1001",
      barcode: "1234567890123",
      quantity: 100,
      variationTypes: ["Color", "Storage"],
      variations: [{ type: "Material", value: "all Good" }],
      added: "20 March 2025",
      isPhysical: true,
      stock: 8,
      weight: 0.5,
      height: 15,
      length: 7,
      width: 0.8,
      variants: 1,
      image: "",
    },
    {
      id: 2,
      name: "Wireless Earbuds Pro",
      description: "Noise-cancelling wireless earbuds",
      category: "Audio",
      tags: ["audio", "earbuds", "wireless"],
      status: "Low Stock",
      price: "149.99",
      discountType: "Flat",
      discountPercentage: 15,
      taxClass: "Reduced",
      vatAmount: 10,
      sku: "EBP2023",
      barcode: "1234567890456",
      quantity: 10,
      variationTypes: ["Color"],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 22,
      weight: 0.1,
      height: 3,
      length: 6,
      width: 2,
      variants: 1,
      image: "",
    },
    {
      id: 3,
      name: "Fitness Tracker Band",
      description: "Water-resistant fitness band with heart rate monitor",
      category: "Wearables",
      tags: ["fitness", "wearable", "tracker"],
      status: "Draft",
      price: "89.99",
      discountType: "Percentage",
      discountPercentage: 5,
      taxClass: "Standard",
      vatAmount: 8,
      sku: "FTB8901",
      barcode: "9876543210123",
      quantity: 50,
      variationTypes: ["Size"],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 34,
      weight: 0.2,
      height: 2,
      length: 5,
      width: 1.5,
      variants: 1,
      image: "",
    },
    {
      id: 4,
      name: "Eco Leather Wallet",
      description: "Slim eco-friendly leather wallet",
      category: "Accessories",
      tags: ["wallet", "leather", "eco"],
      status: "Published",
      price: "39.99",
      discountType: "Flat",
      discountPercentage: 0,
      taxClass: "Reduced",
      vatAmount: 5,
      sku: "ELW4001",
      barcode: "4567891234567",
      quantity: 200,
      variationTypes: ["Color"],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 10,
      weight: 0.15,
      height: 10,
      length: 12,
      width: 1,
      variants: 1,
      image: "",
    },
    {
      id: 5,
      name: "Bluetooth Speaker Z",
      description: "Compact Bluetooth speaker with deep bass",
      category: "Audio",
      tags: ["bluetooth", "speaker", "music"],
      status: "Published",
      price: "59.99",
      discountType: "Flat",
      discountPercentage: 10,
      taxClass: "Standard",
      vatAmount: 12,
      sku: "BSZ001",
      barcode: "3216549870123",
      quantity: 75,
      variationTypes: ["Color"],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 19,
      weight: 0.6,
      height: 10,
      length: 15,
      width: 10,
      variants: 1,
      image: "",
    },
    {
      id: 6,
      name: "Men’s Running Shoes",
      description: "Breathable and lightweight running shoes",
      category: "Footwear",
      tags: ["running", "shoes", "men"],
      status: "Published",
      price: "120.00",
      discountType: "Percentage",
      discountPercentage: 20,
      taxClass: "Standard",
      vatAmount: 18,
      sku: "MRS1200",
      barcode: "5556667778881",
      quantity: 40,
      variationTypes: ["Size", "Color"],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 24,
      weight: 1,
      height: 12,
      length: 30,
      width: 10,
      variants: 1,
      image: "",
    },
    {
      id: 7,
      name: "Office Chair Deluxe",
      description: "Ergonomic chair with lumbar support",
      category: "Furniture",
      tags: ["office", "chair", "ergonomic"],
      status: "Draft",
      price: "249.99",
      discountType: "Flat",
      discountPercentage: 25,
      taxClass: "Standard",
      vatAmount: 20,
      sku: "OCD2400",
      barcode: "1122334455667",
      quantity: 20,
      variationTypes: ["Color"],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 50,
      weight: 15,
      height: 100,
      length: 60,
      width: 60,
      variants: 1,
      image: "",
    },
    {
      id: 8,
      name: "Gaming Keyboard RGB",
      description: "Mechanical keyboard with customizable RGB lighting",
      category: "Electronics",
      tags: ["gaming", "keyboard", "RGB"],
      status: "Low Stock",
      price: "109.00",
      discountType: "Percentage",
      discountPercentage: 15,
      taxClass: "Standard",
      vatAmount: 10,
      sku: "GKR1001",
      barcode: "1111222233334",
      quantity: 15,
      variationTypes: [],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 30,
      weight: 1.2,
      height: 5,
      length: 45,
      width: 20,
      variants: 1,
      image: "",
    },
    {
      id: 9,
      name: "Digital Art Pack",
      description: "High-resolution digital art bundle for designers",
      category: "Digital Goods",
      tags: ["art", "digital", "design"],
      status: "Published",
      price: "29.99",
      discountType: "Flat",
      discountPercentage: 0,
      taxClass: "Digital",
      vatAmount: 0,
      sku: "DAP2024",
      barcode: "0001112223334",
      quantity: 9999,
      variationTypes: [],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: false,
      added: "20 March 2025",
      stock: 20,
      weight: 0,
      height: 0,
      length: 0,
      width: 0,
      variants: 1,
      image: "",
    },
    {
      id: 10,
      name: "Notebook Set",
      description: "Pack of 3 premium notebooks for journaling",
      category: "Stationery",
      tags: ["notebook", "stationery", "journaling"],
      status: "Published",
      price: "24.50",
      discountType: "Percentage",
      discountPercentage: 5,
      taxClass: "Standard",
      vatAmount: 6,
      sku: "NBS3000",
      barcode: "9998887776661",
      quantity: 300,
      variationTypes: [],
      variations: [{ type: "Material", value: "all Good" }],
      isPhysical: true,
      added: "20 March 2025",
      stock: 16,
      weight: 0.8,
      height: 2,
      length: 21,
      width: 14.8,
      variants: 1,
      image: "",
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
      state.list.unshift(action.payload);
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
