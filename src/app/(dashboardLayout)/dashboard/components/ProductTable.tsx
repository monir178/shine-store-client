// components/ProductTable.tsx
"use client";
// @ts-ignore
/* eslint-disable */
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

const columns = [
  { name: "Title", uid: "title" },
  { name: "Price", uid: "price" },
  { name: "Ratings", uid: "ratings" },
  { name: "Brand", uid: "brand" },
  { name: "Category", uid: "category" },
  { name: "Actions", uid: "actions" },
];

const renderCell = (product: any, columnKey: any) => {
  const cellValue = product[columnKey];

  switch (columnKey) {
    case "title":
      return (
        <User
          avatarProps={{ radius: "lg", src: product.img }}
          description={product.category}
          name={cellValue}
        />
      );
    case "price":
      return <span>${cellValue.toFixed(2)}</span>;
    case "ratings":
      return <span>{cellValue.toFixed(1)}</span>;
    case "brand":
      return <span>{cellValue}</span>;
    case "category":
      return <span>{cellValue}</span>;
    case "actions":
      return (
        <div className="relative flex items-center gap-2">
          <Tooltip content="Details">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content="Edit product">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color="danger" content="Delete product">
            <span className="text-lg text-danger cursor-pointer active:opacity-50">
              <Trash2 />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};

interface ProductTableProps {
  products: IProduct[];
}

const ProductTable: React.FC<ProductTableProps> = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <Table aria-label="Product management table">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={products}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
