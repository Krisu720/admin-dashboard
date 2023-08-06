import Breadcrumbs from "@/components/custom/Breadcrumbs";

const page = ({}) => {
  return (
    <div>
      <Breadcrumbs items={[{ name: "Orders", href: "/orders" }]} />
      <div className="h-4" />
      <h1 className="text-3xl font-extrabold">Orders</h1>
      <div className="h-4" />
      
    </div>
  );
};

export default page;
