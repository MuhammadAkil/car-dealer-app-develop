import {
  headerColsForLatestAddedVehicles,
  vehiclesData,
} from "@/data/vehicles-data";
import VehicleTable from "./table";
import AddVehicleSection from "./addVehicleSection";
import MarketValueWidget from "./marketValueWidget";
import RepeatCustomerRate from "./repeatCustomerRate";
import TopProducts from "./topProducts";

export default function NewUnit() {
  return (
    <div className="flex flex-grow flex-col px-4 pb-6 pt-2 md:px-5 lg:px-6 lg:pb-8 3xl:px-8 3xl:pt-4 4xl:px-10 4xl:pb-9">
      <div className="@container">
        <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
          <AddVehicleSection />
          <MarketValueWidget className="border border-muted bg-gray-0 p-5 dark:bg-gray-50 lg:p-7 rounded-lg flex flex-col h-[864px] @sm:h-[920px] @4xl:col-span-2 @7xl:col-span-4 @7xl:col-start-9 @7xl:row-start-1 @7xl:row-end-3 @7xl:h-full" />
          <div className="@4xl:col-span-2 @7xl:col-span-8">
            <VehicleTable
              data={vehiclesData.slice(0, 3)}
              headerCols={headerColsForLatestAddedVehicles}
            />
          </div>
          <RepeatCustomerRate className="border border-muted bg-gray-0 p-5 dark:bg-gray-50 lg:p-7 rounded-lg @4xl:col-span-2 @7xl:col-span-9 @[90rem]:col-span-8" />
          <TopProducts className="border border-muted bg-gray-0 p-5 dark:bg-gray-50 lg:p-7 rounded-lg @4xl:col-span-2 @7xl:col-span-3 @[90rem]:col-span-4" />
        </div>
      </div>
    </div>
  );
}
