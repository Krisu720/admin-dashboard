import CreateEmailForm from "@/components/Forms/CreateEmailForm";
import Breadcrumbs from "@/components/custom/Breadcrumbs";
import React from "react";

const Page = () => {
  return (
    <div>
      <Breadcrumbs
        items={[
          { name: "Email", href: "/email" },
          { name: "Create email", href: "/email/create" },
        ]}
      />
      <div className="h-4" />
      <h1 className="text-3xl  font-extrabold">Create Email</h1>
      <div className="h-4" />
      <CreateEmailForm/>
    </div>
  );
};

export default Page;
