import PageHeader from "@/components/pageHeader";
import Overview from "@/containers/inventory/overview";

const pageHeader = {
  title: "Overview",
  breadcrumb: [
    {
      href: "/",
      name: "Inventory",
    },
    {
      href: "/inventory/overview",
      name: "Overview",
    },
  ],
};

export default function VehicleOnboardingPage() {
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
