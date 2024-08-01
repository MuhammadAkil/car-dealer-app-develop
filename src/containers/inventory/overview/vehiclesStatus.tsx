"use client";

import WidgetCard from "@/components/widgetCard";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Legend,
  Bar,
} from "recharts";
import { CustomTooltip } from "@/components/charts/customTooltip";
import { useMedia } from "@/hooks/useMedia";
import DropdownAction from "@/components/charts/dropdownAction";
import SimpleBar from "simplebar-react";

const data = [
  {
    name: "New Arrival",
    count: 75,
    amt: 85,
    fill: "#5a5fd7",
    stroke: "#5a5fd7",
    dataKey: "test",
  },
  {
    name: "In Transport",
    count: 50,
    amt: 10,
    fill: "#5a5fd7",
    stroke: "#5a5fd7",
    dataKey: "test",
  },
  {
    name: "Under Inspect",
    count: 10,
    amt: 10,
    fill: "#5a5fd7",
    stroke: "#5a5fd7",
    dataKey: "test",
  },
  {
    name: "Under Repair",
    count: 30,
    amt: 10,
    fill: "#5a5fd7",
    stroke: "#5a5fd7",
    dataKey: "test",
  },
  {
    name: "Under Prep",
    count: 90,
    amt: 10,
    fill: "#5a5fd7",
    stroke: "#5a5fd7",
    dataKey: "test",
  },
  {
    name: "Front Ready",
    count: 65,
    amt: 10,
    fill: "#5a5fd7",
    stroke: "#5a5fd7",
    dataKey: "test",
  },
  {
    name: "Deal",
    count: 15,
    amt: 10,
    fill: "#5a5fd7",
    stroke: "#5a5fd7",
    dataKey: "test",
  },
];

const viewOptions = [
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Custom",
    value: "custom",
  },
];

export default function VehiclesStatus({ className }: { className?: string }) {
  const isMediumScreen = useMedia("(max-width: 1200px)", false);
  const isTab = useMedia('(max-width: 768px)', false);

  return (
    <WidgetCard
      title={"Vehicles Status"}
      description={"Number of vehicles by status"}
      rounded="lg"
      descriptionClassName="text-gray-500 mt-0.5 leading-relaxed"
      className={className}
      action={
        <div className="flex items-center gap-5">
          <DropdownAction
            options={viewOptions}
            dropdownClassName="!z-0"
            className="rounded-md border"
            onChange={(v) => console.log(v)}
          />
        </div>
      }
    >
      <SimpleBar>
        <div className="h-80 w-full @sm:pt-3">
          <ResponsiveContainer
            width="100%"
            height="100%"
            {...(isTab && { minWidth: "700px" })}
          >
            <BarChart
              data={data}
            barSize={isMediumScreen ? 18 : 24}
              margin={{
                left: -10,
              }}
              className="[&_.recharts-cartesian-grid-vertical]:opacity-0"
            >
              <CartesianGrid strokeDasharray="3 3" />
            <XAxis tickLine={false} dataKey="name" />
              <YAxis tickLine={false} />
              <Tooltip content={<CustomTooltip label={"name"} />} />
              <Legend />
              <Bar dataKey="count" fill="#5a5fd7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </SimpleBar>
    </WidgetCard>
  );
}
