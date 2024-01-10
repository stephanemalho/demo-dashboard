"use client";
import { TableCell } from "@/components/ui/table";
import React from "react";
import DeleteButton from "../button/DeleteButton";
import { TableHandleDeleteProps } from "@/types";

const TableHandleDelete = ({ onDelete, id }: TableHandleDeleteProps) => {
  const handleDelete = () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this thread?"
    );
    if (confirm) {
      console.log("the thread as been deleted");
      onDelete();
    }
  };

  return (
    <TableCell title="Delete">
      <DeleteButton onDelete={handleDelete} id={id} />
    </TableCell>
  );
};

export default TableHandleDelete;
