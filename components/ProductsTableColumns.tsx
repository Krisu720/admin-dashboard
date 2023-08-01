"use client";

import { Products } from "@/lib/fakeData";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";

export const columns: ColumnDef<Products>[] = [
  {
    accessorKey: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "image",
    cell: ({ row }) => {
      const imgUrl: string[] = row.getValue("image");

      return (
        <div className="overflow-hidden rounded-xl h-16 w-16">
          <AspectRatio ratio={1 / 1}>
            <Image
              className="object-cover"
              src={imgUrl.length === 0 ? "/image.jpg" : imgUrl[0]}
              fill
              alt="inspect image"
            />
          </AspectRatio>
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseInt(row.getValue("amount"));
      const formatted = amount + " szt.";
      return formatted;
    },
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const status = parseFloat(row.getValue("price"));
      const formatted = status + " PLN";
      return formatted;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      return (
        <Badge variant={status === "published" ? "success" : "outline"}>
          {status}
        </Badge>
      );
    },
  },
];
