'use client';

import { CustomTooltip } from '@/components/charts/customTooltip';
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  Legend,
  Line,
} from 'recharts';
import WidgetCard from '@/components/widgetCard';
import DropdownAction from '@/components/charts/dropdownAction';

const data = [
  { name: 'Jan', sedans: 1200, suvs: 800, trucks: 600 },
  { name: 'Feb', sedans: 1400, suvs: 900, trucks: 700 },
  { name: 'Mar', sedans: 1600, suvs: 1100, trucks: 800 },
  { name: 'Apr', sedans: 1800, suvs: 1200, trucks: 900 },
  { name: 'May', sedans: 1500, suvs: 1000, trucks: 700 },
  { name: 'Jun', sedans: 1700, suvs: 1100, trucks: 800 },
  { name: 'Jul', sedans: 1900, suvs: 1300, trucks: 1000 },
  { name: 'Aug', sedans: 1800, suvs: 1200, trucks: 900 },
  { name: 'Sep', sedans: 1600, suvs: 1100, trucks: 800 },
  { name: 'Oct', sedans: 1700, suvs: 1000, trucks: 700 },
  { name: 'Nov', sedans: 1500, suvs: 900, trucks: 600 },
  { name: 'Dec', sedans: 1300, suvs: 800, trucks: 500 },
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


export default function SalesTrends({ className }: { className?: string }) {

  function handleChange(viewType: string) {
  }

  return (
    <WidgetCard
      title={'Sales trends over time'}
      descriptionClassName="text-gray-500 mt-0.5 leading-relaxed"
      rounded="lg"
      action={
        <DropdownAction
        className="rounded-lg border"
        options={viewOptions}
        onChange={handleChange}
        dropdownClassName="!z-0"
      />

      }
      className={className}
    >
      <div className="h-80 w-full @sm:pt-3 @lg:pt-8">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              left: -10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="sedans"
              stroke="#3b82f6"
              activeDot={{ r: 8 }}
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="suvs"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="trucks"
              stroke="#f97316"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </WidgetCard>
  );
}
