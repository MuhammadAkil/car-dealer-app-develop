"use client";

import cn from "@/utils/classNames";
import MetricCard from "@/components/metricCard";
import WidgetCard from "@/components/widgetCard";
import SimpleBar from "simplebar-react";
import UnderRepair from "@/components/icons/UnderRepair";
import TotalOnboadingIcon from "@/components/icons/totalOnboarding";
import NewArrivalIcon from "@/components/icons/newArrival";
import InTransportIcon from "@/components/icons/InTransport";
import UnderInspectionIcon from "@/components/icons/underInspection";
import UnderPreparationIcon from "@/components/icons/underpreparation";

const statData = [
  {
    id: "1",
    title: "Total Onbaording",
    icon: <TotalOnboadingIcon className="h-7 w-7" />,
    graphColor: "text-red",
    metric: 94534,
    increased: true,
    percentage: "+4.40",
  },
  {
    id: "2",
    title: "New Arrival",
    icon: <NewArrivalIcon className="h-7 w-7" />,
    graphColor: "text-green",
    metric: 4533,
    increased: true,
    percentage: "+32.40",
  },
  {
    id: "3",
    icon: <InTransportIcon className="h-9 w-9" />,
    graphColor: "text-green",
    title: "In Transport",
    metric: 12390,
    increased: true,
    percentage: "+32.40",
  },
  {
    id: "4",
    title: "Under Inspection",
    icon: <UnderInspectionIcon className="h-7 w-7" />,
    graphColor: "text-green",
    metric: 3325,
    increased: true,
    percentage: "+32.40",
  },
  {
    id: "5",
    title: "Under Repair",
    icon: <UnderRepair className="h-7 w-7" />,
    graphColor: "text-red",
    metric: 4524,
    decreased: true,
    percentage: "5.40",
  },
  {
    id: "5",
    title: "Under Preparation",
    icon: <UnderPreparationIcon className="h-7 w-7" />,
    graphColor: "text-red",
    metric: 344,
    decreased: true,
    percentage: "5.40",
  },
];

export default function Stats({ className }: { className?: string }) {
  return (
    <WidgetCard
      rounded="lg"
      className={className}
      title=""
      headerClassName="mb-2"
    >
      <SimpleBar>
        <div className="grid grid-flow-col gap-5 pb-1">
          {statData.map((stat) => (
            <MetricCard
              key={stat.title + stat.id}
              title={stat.title}
              metric={stat.metric}
              icon={stat.icon}
              className="w-[200px] border-0 p-1 lg:p-1"
              titleClassName="capitalize"
              contentClassName="ps-2"
              iconClassName={cn("@5xl:w-20 @5xl:h-20 h-16 w-16")}
              chartClassName="hidden @[200px]:flex @[200px]:items-center h-14 w-24"
            ></MetricCard>
          ))}
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
