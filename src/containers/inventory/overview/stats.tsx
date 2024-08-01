'use client';

import { Button, Text } from 'rizzui';
import cn from '@/utils/classNames';
import { useScrollableSlider } from '@/hooks/useScrollableSlider';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';
import CircleProgressBar from '@/components/circularProgressBar';
import TrendingUpIcon from '@/components/icons/trendingUp';
import TrendingDownIcon from '@/components/icons/tredndingDown';
import MetricCard from '@/components/metricCard';

type StatsType = {
  className?: string;
};

const statData = [
  {
    id: 1,
    title: 'Total Inventory',
    metric: '47,636',
    fill: '#EE0000',
    percentage: 29,
    increased: true,
    decreased: false,
    value: '+38.40',
  },
  {
    id: 2,
    title: 'Current Inventory',
    metric: '53,875',
    fill: '#FAA700',
    percentage: 70,
    increased: false,
    decreased: true,
    value: '-10.45',
  },
  {
    id: 3,
    title: 'Total Onboarding',
    metric: '80,975',
    fill: '#237f52',
    percentage: 89,
    increased: true,
    decreased: false,
    value: '+40.34',
  },
  {
    id: 4,
    title: 'Total Sold',
    metric: '65,097',
    fill: '#EE0000',
    percentage: 14,
    increased: true,
    decreased: false,
    value: '+50.45',
  },
];

export function StatGrid({ className }: { className?: string }) {
  return (
    <>
      {statData.map((stat: any) => {
        return (
          <MetricCard
            key={stat.id}
            title={stat.title}
            metric={stat.metric}
            metricClassName="3xl:text-[22px]"
            className={cn('w-full max-w-full justify-between', className)}
            chart={
              <CircleProgressBar
                percentage={stat.percentage}
                size={80}
                stroke="#D7E3FE"
                strokeWidth={7}
                progressColor={stat.fill}
                useParentResponsive={true}
                label={
                  <Text
                    as="span"
                    className="font-lexend text-base font-medium text-gray-700"
                  >
                    {stat.percentage}%
                  </Text>
                }
                strokeClassName="dark:stroke-gray-300"
              />
            }
          >
            <Text className="mt-3 flex items-center leading-none text-gray-500">
              <Text
                as="span"
                className={cn(
                  'me-2 inline-flex items-center font-medium',
                  stat.increased ? 'text-green' : 'text-red'
                )}
              >
                {stat.increased ? (
                  <TrendingUpIcon className="me-1 h-4 w-4" />
                ) : (
                  <TrendingDownIcon className="me-1 h-4 w-4" />
                )}
                {stat.value}%
              </Text>
              last month
            </Text>
          </MetricCard>
        );
      })}
    </>
  );
}

export default function Stats({ className }: StatsType) {
  const {
    sliderEl,
    sliderPrevBtn,
    sliderNextBtn,
    scrollToTheRight,
    scrollToTheLeft,
  } = useScrollableSlider();

  return (
    <div
      className={cn(
        'relative flex w-auto items-center overflow-hidden',
        className
      )}
    >
      <Button
        title="Prev"
        variant="text"
        ref={sliderPrevBtn}
        onClick={() => scrollToTheLeft()}
        className="!absolute -left-1 top-0 z-10 !h-full w-20 !justify-start rounded-none bg-gradient-to-r from-gray-0 via-gray-0/70 to-transparent px-0 ps-1 text-gray-500 hover:text-gray-900 3xl:hidden dark:from-gray-50 dark:via-gray-50/70"
      >
        <PiCaretLeftBold className="h-5 w-5" />
      </Button>
      <div className="w-full overflow-hidden">
        <div
          ref={sliderEl}
          className="custom-scrollbar-x grid grid-flow-col gap-5 overflow-x-auto scroll-smooth 2xl:gap-6 3xl:gap-8"
        >
          <StatGrid className="min-w-[292px]" />
        </div>
      </div>
      <Button
        title="Next"
        variant="text"
        ref={sliderNextBtn}
        onClick={() => scrollToTheRight()}
        className="!absolute right-0 top-0 z-10 !h-full w-20 !justify-end rounded-none bg-gradient-to-l from-gray-0 via-gray-0/70 to-transparent px-0 text-gray-500 hover:text-gray-900 3xl:hidden dark:from-gray-50 dark:via-gray-50/70"
      >
        <PiCaretRightBold className="h-5 w-5" />
      </Button>
    </div>
  );
}
