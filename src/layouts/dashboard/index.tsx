'use client';

import cn from '@/utils/classNames';
import Header from '@/components/header';
import FixedSidebar from '@/components/fixedSidebar';
import { useSidebars } from '@/hooks/useSidebars';
import ExpandableSidebar from '@/components/expandableSidebar';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { expandedLeft } = useSidebars();

  return (
    <main className={cn('flex min-h-screen flex-grow')}>
      <FixedSidebar />
      <ExpandableSidebar />
      <div className="flex w-full flex-col ">
        <Header className="xl:ms-[88px]" />
        <div
          className={cn(
            'flex flex-grow flex-col gap-4 px-4 pb-6 duration-200 md:px-5 lg:pb-8  xl:pe-8 ',
            expandedLeft ? 'xl:ps-[414px]' : 'xl:ps-[110px]'
          )}
        >
          <div className="grow xl:mt-4">{children}</div>
        </div>
      </div>
    </main>
  );
}
