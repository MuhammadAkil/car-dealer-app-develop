
import Stats from "./stats";
import VehicleTable from "./vehicle-list/table";
import { headerColsForOnboarding, vehiclesData } from "@/data/vehicles-data";

export default function Overview() {
  return (
    <>
      <div className="mb-8 @container">
        <Stats className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />
      </div>
      <VehicleTable data={vehiclesData} headerCols={headerColsForOnboarding} />
    </>
  );
}
