import PageHeader from "@/components/pageHeader";
import Overview from "@/containers/inventory/overview";
import ModalButton from "@/shared/modal-button";

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

export default function CustomerPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}>
        </PageHeader>
      <Overview />
    </>
  );
}
