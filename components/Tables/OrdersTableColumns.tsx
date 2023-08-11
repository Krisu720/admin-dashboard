"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  Copy,
  MoreVertical,
} from "lucide-react";
import { toast } from "../ui/use-toast";
import { Order, OrderStatus } from "@/types/global";

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: "id",
    header: "Id"
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
    accessorKey: "method",
    header: "Method",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status");

      const checkVariant = () => {
        if (status === OrderStatus.paid) {
          return "success";
        } else if (status === OrderStatus.processing) {
          return "outline";
        } else if (status === OrderStatus.unpaid) {
          return "destructive";
        } else {
          return "secondary";
        }
      };

      return <Badge variant={checkVariant()}>{status}</Badge>;
    },
  },
  {
    accessorKey: "actions",
    header: "",
    cell: ({ row }) => {

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
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
