import PageHeader from "@/components/pageHeader";
import Overview from "@/containers/inventory/overview";

const pageHeader = {
  title: "Customers",
  breadcrumb: [
    {
      href: "/",
      name: "CRM",
    },
    {
      href: "/inventory/overview",
      name: "Overview",
    },
  ],
};

export default function CustomerPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>
      <Overview />
    </>
  );
}
