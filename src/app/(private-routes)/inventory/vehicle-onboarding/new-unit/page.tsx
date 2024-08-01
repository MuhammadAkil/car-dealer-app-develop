import PageHeader from "@/components/pageHeader";
import NewUnit from "@/containers/inventory/vehicleOnboarding/newUnit";

const pageHeader = {
  title: "Add New Vehicle",
  breadcrumb: [
    {
      href: "/",
      name: "Inventory",
    },
    {
      href: "/inventory/vehicle-onboarding/overview",
      name: "Vehicle Onboarding",
    },
    {
      href: "/inventory/vehicle-onboarding/new-unit",
      name: "Add New",
    },
  ],
};

export default function NewUnitPage() {
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>
      <NewUnit />
    </>
  );
}
