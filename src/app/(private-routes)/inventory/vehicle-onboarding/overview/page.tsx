import PageHeader from "@/components/pageHeader";
import Overview from "@/containers/inventory/vehicleOnboarding/overview";

const pageHeader = {
  title: "Vehicle Onboarding",
  breadcrumb: [
    {
      href: "/",
      name: "Inventory",
    },
    {
      href: "/inventory/vehicle-onboarding/overview",
      name: "Vehicle Onboarding",
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
