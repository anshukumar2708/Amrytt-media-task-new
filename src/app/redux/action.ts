// store/action.ts
import { RootState } from "./store";

export const selectFilteredProducts = (state: RootState) => {
  const { list, filterStatus, searchTerm } = state.products;

  return list.filter((product) => {
    const matchesStatus =
      filterStatus === "All Product" || product.status === filterStatus;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm);

    return matchesStatus && matchesSearch;
  });
};
