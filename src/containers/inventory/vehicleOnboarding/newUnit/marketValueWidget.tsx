"use client";

import { Button, Input, Select, Text, Title } from "rizzui";
import cn from "@/utils/classNames";
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import WidgetCard from "@/components/widgetCard";
import { CustomTooltip } from "@/components/charts/customTooltip";
import ButtonGroupAction from "@/components/buttonGroupAction";
import MarketValue from "@/components/icons/MarketValue";
import EstimatesIcon from "@/components/icons/EstimatesIcon";

const data = [
  {
    month: "Jan",
    totalSales: 95,
  },
  {
    month: "Mar",
    totalSales: 70,
  },
  {
    month: "May",
    totalSales: 113,
  },
  {
    month: "Jul",
    totalSales: 159,
  },
  {
    month: "Sep",
    totalSales: 105,
  },
  {
    month: "Nov",
    totalSales: 140,
  },
];

const data2 = [
  { name: "Market Value", value: "$10,277 - $20,061", icon: <MarketValue /> },
  { name: "Estimate Certainty", value: "99%", icon: <EstimatesIcon /> },
];

const filterOptions = ["5 D", "2 W", "1 M", "6 M", "1 Y"];

export default function MarketValueWidget({
  className,
}: {
  className?: string;
}) {
  function handleFilterBy(data: string) {
    console.log("Profit Filter:", data);
  }

  return (
    <WidgetCard
      title={"Market Value For:"}
      titleClassName="text-sm font-bold sm:text-xl 3xl:text-xl text-gray-900 font-lexend mt-1"
      headerClassName="mb-4"
      className={cn("flex flex-col", className)}
    >
      <div className="grid flex-grow grid-cols-1 gap-3">
        <div className="relative max-w-sm">
          <Input
            type="text"
            placeholder="Enter VIN Number"
            inputClassName="text-sm"
          />
          <Button
            className="absolute end-0 top-0 text-sm font-normal"
            type="submit"
            variant="text"
          >
            Check
          </Button>
          <p className="pt-1.5 text-xs leading-relaxed text-gray-500">
            Please enter VIM Number to check the Market Value
          </p>
          <Title
            as="h4"
            className={cn(
              "text-base font-semi-bold sm:text-sm font-bold sm:text-lg 3xl:text-md text-gray-900 font-lexend my-2"
            )}
          >
            2012 Mazda SXT Sport
          </Title>
        </div>

        <ButtonGroupAction
          options={filterOptions}
          defaultActive={filterOptions[0]}
          onChange={(data) => handleFilterBy(data)}
          btnClassName="@sm:px-2.5"
          className="justify-between self-start rounded-lg border border-muted p-1.5"
        />
        <div className="mt-auto h-64 w-full pb-2 @sm:h-72 @sm:pt-3 @7xl:h-[130px] lg:pb-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="totalSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.125} />
                  <stop offset="95%" stopColor="#ffdadf" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="8 10"
                strokeOpacity={0.5}
                vertical={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="bump"
                dataKey="totalSales"
                stroke="#10b981"
                strokeWidth={2.3}
                fillOpacity={1}
                fill="url(#totalSales)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <Text className="text-gray-500 @sm:mt-0 mb-2">
          Estimated based on 31 similar vehicles sold between Mar 21, 2024 - Ju
          16, 2024
        </Text>
        <div className="border bg-[#FDF6F3] rounded-lg p-5">
          <Title
            className={cn(
              "text-base font-semi-bold text-xs font-bold text-gray-900 font-lexend mb-2"
            )}
          >
            Current Mileage
          </Title>
          <Select
            selectClassName="bg-white"
            inPortal={false}
            placeholder="182,582"
            options={[
              {
                label: "200,000",
                value: "200000",
              },
              {
                label: "400,000",
                value: "400000",
              },
            ]}
            onChange={() => {}}
            getOptionValue={(option) => option.value}
          />
          <div className="mt-5">
            {data2.map((item, index) => (
              <div
                key={item.name}
                className="mb-4 flex items-center justify-between border-b border-muted pb-4 last:mb-0 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-start">
                  <span />
                  {item.icon}
                  <Text
                    as="span"
                    className="ml-3 text-base font-semi-bold text-xs font-bold text-gray-900 font-lexend"
                  >
                    {item.name}
                  </Text>
                </div>
                <Text as="span">{item.value}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetCard>
  );
}
