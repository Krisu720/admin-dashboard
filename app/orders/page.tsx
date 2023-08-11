import { columns } from "@/components/Tables/OrdersTableColumns";
import { Table } from "@/components/Tables/Table";
import Breadcrumbs from "@/components/custom/Breadcrumbs";
import { orders } from "@/lib/fakeData";

const page = ({}) => {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Orders", href: "/orders" }]} />
      <div className="h-4" />
      <h1 className="text-3xl font-extrabold">Orders</h1>
      <div className="h-4" />
      <Table data={orders} columns={columns} filteredValue="id"/>
    </div>
  );
};

export default page;
