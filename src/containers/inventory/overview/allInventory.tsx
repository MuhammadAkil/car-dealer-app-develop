"use client";

import { Title } from "rizzui";
import cn from "@/utils/classNames";
import { useCallback, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import DropdownAction from "@/components/charts/dropdownAction";
import WidgetCard from "@/components/widgetCard";

const data = [
  { name: "Onboarding", value: 45 },
  { name: "Front Ready", value: 58 },
  { name: "Ready for Sale", value: 32 },
  { name: "Deal", value: 16 },
];
const COLORS = ["#2B7F75", "#FFD66B", "#64CCC5", "#176B87"];

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

const renderActiveShape = (props: any) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, outerRadius, startAngle, endAngle, midAngle } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius - 100) * cos;
  const sy = cy + (outerRadius - 100) * sin;
  return (
    <Sector
      cx={sx}
      cy={sy}
      cornerRadius={5}
      innerRadius={50}
      outerRadius={120}
      startAngle={startAngle}
      endAngle={endAngle}
      fill={props.fill}
    />
  );
};

export default function AllInventory({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [chartData] = useState(data);

  const onMouseOver = useCallback((_: any, index: number) => {
    setActiveIndex(index);
  }, []);
  const onMouseLeave = useCallback(() => {
    setActiveIndex(0);
  }, []);

  function handleChange(viewType: string) {
  }

  return (
    <WidgetCard
      title="All Inventory"
      headerClassName="items-center"
      className={cn("@container", className)}
      action={
        <DropdownAction
          className="rounded-lg border"
          options={viewOptions}
          onChange={handleChange}
          dropdownClassName="!z-0"
        />
      }
    >
      <div className="h-full items-center gap-4 @sm:flex">
        <div className="relative h-[300px] w-full after:absolute after:inset-1/2 after:h-20 after:w-20 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:border after:border-dashed after:border-gray-300 @sm:w-3/5 @sm:py-3 rtl:after:translate-x-1/2">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart className="w-20 [&_.recharts-layer:focus]:outline-none [&_.recharts-sector:focus]:outline-none dark:[&_.recharts-text.recharts-label]:first-of-type:fill-white">
              <Pie
                activeIndex={activeIndex}
                data={chartData}
                cornerRadius={10}
                innerRadius={55}
                outerRadius={100}
                paddingAngle={5}
                stroke="rgba(0,0,0,0)"
                dataKey="value"
                activeShape={renderActiveShape}
                onMouseOver={onMouseOver}
                onMouseLeave={onMouseLeave}
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="@sm:w-2/5 @sm:ps-2">
          <div className="mb-4 mt-1">
            <div className="mb-1.5 text-gray-700">Vehicles</div>
            <Title as="h2" className="font-inter font-bold text-gray-900">
              10,587
            </Title>
          </div>
          <div className="">
            <Detail color={COLORS[1]} value={58} text="Onboarding" />
            <Detail color={COLORS[0]} value={45} text="Front Ready" />
            <Detail color={COLORS[2]} value={32} text="Ready for Sale" />
            <Detail color={COLORS[3]} value={16} text="Deal" />
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}

function Detail({
  color,
  value,
  text,
}: {
  color: string;
  value: number;
  text: string;
}) {
  return (
    <div className="flex justify-between gap-2 border-b border-gray-100 py-3 last:border-b-0">
      <div className=" col-span-3 flex items-center justify-start gap-1.5">
        <span style={{ background: color }} className="block h-3 w-3 rounded" />
        <p className="text-gray-500">{text}</p>
      </div>
      <span
        style={{ borderColor: color }}
        className="rounded-full border-2 px-2 font-semibold text-gray-700"
      >
        {value}%
      </span>
    </div>
  );
}
