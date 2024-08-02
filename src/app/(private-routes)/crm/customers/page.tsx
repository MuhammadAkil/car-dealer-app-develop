import PageHeader from "@/components/pageHeader";
import CustomerTable from "@/containers/crm/customers/customers-list/table";
import { CustomersData, headerColsForCustomer } from "@/data/customers-data";

const pageHeader = {
  title: "Customers",
  breadcrumb: [
    {
      href: "/",
      name: "CRM",
    },
    {
      href: "/crm/customers",
      name: "Customers",
    },
  ],
};

export default function CustomersPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      />
      <CustomerTable data={CustomersData} headerCols={headerColsForCustomer} />
    </>
  );
}
