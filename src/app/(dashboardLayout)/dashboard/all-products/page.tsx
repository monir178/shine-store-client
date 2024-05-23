import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Tooltip,
} from "@nextui-org/react";

import { IProduct } from "@/app/types/product";
import { EditIcon, EyeIcon, Trash2 } from "lucide-react";
import ProductTable from "../components/ProductTable";

const DashboardProductTable = async () => {
  const res = await fetch("http://localhost:5000/all-products");
  const products = await res.json();

  return (
    <div className="mt-14 md:mt-6">
      <h1 className="text-center tracking-wider font-semibold mb-6 text-green-400 text-xl lg:text-3xl uppercase">
        Manage Your Products
      </h1>
      <ProductTable products={products} />
    </div>
  );
};

export default DashboardProductTable;
