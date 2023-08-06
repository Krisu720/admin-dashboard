import Breadcrumbs from "@/components/custom/Breadcrumbs";
import { Table } from "@/components/Tables/Table";
import { columns } from "@/components/Tables/ProductsTableColumns";
import { Button } from "@/components/ui/button";
import { products } from "@/lib/fakeData";
import { Plus } from "lucide-react";
import Link from "next/link";

const page = ({}) => {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Products", href: "/products" }]} />
      <div className="h-4" />
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link href="/products/create">
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" /> Add product
          </Button>
        </Link>
      </div>
      <div className="h-4" />
      <Table columns={columns} data={products} />
    </div>
  );
};

export default page;
