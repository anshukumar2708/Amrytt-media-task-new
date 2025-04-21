import { Button } from "antd";
import * as XLSX from "xlsx";
import ExportIcon from "../all-icons/export-icon";

export type ProductStatus = "All Product" | "Published" | "Low Stock" | "Draft";

interface Variation {
  type: string;
  value: string;
}

interface IProductFull {
  id: number;
  name: string;
  description: string;
  category: string;
  tags: string[];
  status: ProductStatus;
  price: string;
  discountType: string;
  discountPercentage: number;
  taxClass: string;
  vatAmount: number;
  sku: string;
  barcode: string;
  quantity: number;
  variationTypes: string[];
  variations: Variation[];
  added: string;
  isPhysical: boolean;
  stock: number;
  weight: number;
  height: number;
  length: number;
  width: number;
  variants: number;
  image: string;
}

const DataExport = ({ exportData }: { exportData: IProductFull[] }) => {
  const formattedData = exportData.map((item) => ({
    ID: item.id,
    Name: item.name,
    Description: item.description,
    Category: item.category,
    Tags: item.tags.join(", "),
    Status: item.status,
    Price: item.price,
    "Discount Type": item.discountType,
    "Discount Percentage": item.discountPercentage + "%",
    "Tax Class": item.taxClass,
    "VAT Amount": item.vatAmount,
    SKU: item.sku,
    Barcode: item.barcode,
    Quantity: item.quantity,
    "Variation Types": item.variationTypes.join(", "),
    Variations: item.variations.map((v) => `${v.type}: ${v.value}`).join(" | "),
    "Added Date": item.added,
    "Is Physical": item.isPhysical ? "Yes" : "No",
    Stock: item.stock,
    Weight: item.weight + " kg",
    Height: item.height + " cm",
    Length: item.length + " cm",
    Width: item.width + " cm",
    Variants: item.variants,
  }));

  const downloadExcelFile = () => {
    const ws = XLSX.utils.json_to_sheet(formattedData.reverse());

    // Optional: auto fit columns (estimated)
    const colWidths = Object.keys(formattedData[0] || {}).map((key) => ({
      wch: Math.max(10, key.length + 5),
    }));
    ws["!cols"] = colWidths;

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Products");

    XLSX.writeFile(wb, "product_data.xlsx");
  };

  return (
    <div>
      <Button
        icon={<ExportIcon />}
        className="mr-2"
        onClick={downloadExcelFile}
      >
        Export
      </Button>
    </div>
  );
};

export default DataExport;
