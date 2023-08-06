"use client";

import { Products } from "@/lib/fakeData";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  Copy,
  Lock,
  MoreVertical,
  Pencil,
  Share,
  Trash2,
  Unlock,
} from "lucide-react";
import { toast } from "../ui/use-toast";

export const columns: ColumnDef<Products>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "image",
    header: "",
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
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {
      const isPublic = row.getValue("status") === "published";

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild id="idk">
            <Button variant="ghost" size="icon">
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(row.original.id);
                toast({ title: "Copied to clipboard." });
              }}
            >
              <Copy className="mr-2" />
              Copy Id
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Pencil className="mr-2" />
              Edit
            </DropdownMenuItem>
            {isPublic ? (
              <DropdownMenuItem className="text-purple-700">
                <Lock className="mr-2" />
                Private
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem className="text-green-500">
                <Unlock className="mr-2" />
                Publish
              </DropdownMenuItem>
            )}

            <DropdownMenuItem className="text-red-500">
              <Trash2 className="mr-2" />
              Remove
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
