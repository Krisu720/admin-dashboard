"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table as UiTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "./DataTablePagination";
import { Fragment } from "react";
import { Input } from "../ui/input";
import { DatePicker } from "../DatePicker";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface TableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filteredValue?: string;
}

export function Table<TData, TValue>({
  columns,
  data,
  filteredValue,
}: TableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    initialState: { pagination: { pageSize: 5 } },
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
  });


  return (
    <>
      <div className="flex mb-2 justify-between gap-2 items-start">
        {filteredValue && (
          <Input
            placeholder={"Filter by " + filteredValue}
            value={
              (table.getColumn(filteredValue)?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn(filteredValue)?.setFilterValue(event.target.value)
            }
          />
        )}
        {/* <DatePicker /> */}
      </div>
     
      <div className="rounded-md border">
        <UiTable>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </UiTable>
        <DataTablePagination table={table} />
      </div>
    </>
  );
}
