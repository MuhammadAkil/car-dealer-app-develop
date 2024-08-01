import { vehiclesData, headerColsForOverview } from "@/data/vehicles-data";
import Stats from "./stats";
import VehiclesStatus from "./vehiclesStatus";
import TopInventorySold from "./topInventorySold";
import SalesTrends from "./salesTrends";
import AllInventory from "./allInventory";
import VehicleTable from "../vehicleOnboarding/overview/vehicle-list/table";

export default function Overview() {
  return (
    <div>
      <div className="mb-8 @container">
        <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
          <Stats className="grid-cols-1 @xl:grid-cols-2 @4xl:col-span-2 @6xl:grid-cols-4 @7xl:col-span-12" />
          <VehiclesStatus className="flex flex-col justify-between @7xl:col-span-6 border p-5 lg:p-7" />
          <TopInventorySold className="flex flex-col justify-between @7xl:col-span-6 border p-5 lg:p-7" />
          <AllInventory className="flex flex-col justify-between @7xl:col-span-6 border p-5 lg:p-7" />
          <SalesTrends className="flex flex-col justify-between @7xl:col-span-6 border p-5 lg:p-7" />
        </div>
      </div>
      <VehicleTable data={vehiclesData} headerCols={headerColsForOverview} />
    </div>
  );
}
