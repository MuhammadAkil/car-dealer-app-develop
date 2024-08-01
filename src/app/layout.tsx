import GlobalDrawer from "@/shared/drawerViews";
import { inter, lexendDeca } from "@/app/fonts";
import cn from "@/utils/classNames";
import "@/app/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        {children}
        <GlobalDrawer />
      </body>
    </html>
  );
}
