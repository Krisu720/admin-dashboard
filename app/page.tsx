"use client";

import Breadcrumbs from "@/components/custom/Breadcrumbs";
import Card from "@/components/custom/Card";
import TradingBadge from "@/components/custom/TradingBadge";
import useMounted from "@/hooks/useMounted";
import { areaChart, chartColors, columnChart, donutChart } from "@/lib/charts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Home() {
  const mounted = useMounted();
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === "light" ? "light" : "dark";
  const donutSeries = [2100, 4300, 2500];

  const areaData = areaChart(theme);
  const donutData = donutChart(theme);
  const columnData = columnChart(theme);

  return (
    <div className="">
      <Breadcrumbs />
      <div className="h-4" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <h1 className="text-muted-foreground">Sales</h1>
          <h1 className="text-2xl">9,000$</h1>
          <TradingBadge variant="success" value={2.6} />
        </Card>
        <Card>
          <h1 className="text-muted-foreground">Visitors</h1>
          <h1 className="text-2xl">11 421</h1>
          <TradingBadge variant="destructive" value={0.9} />
        </Card>
        <Card>
          <h1 className="text-muted-foreground">Orders</h1>
          <h1 className="text-2xl">150</h1>
          <TradingBadge variant="success" value={0.1} />
        </Card>
        <Card>
          <h1 className="text-muted-foreground">New Orders</h1>
          <h1 className="text-2xl">6</h1>
          <TradingBadge variant="success" value={6.6} />
        </Card>
      </div>
      <div className="h-4" />
      <div className="grid lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3">
          <h1>Total Sales</h1>
          {mounted && areaData ? (
            <ReactApexChart
              height={400}
              options={areaData}
              series={areaData.series}
              type={areaData.chart?.type}
            />
          ) : (
            <></>
          )}
        </Card>
        <Card>
          <h1>Annual turnover</h1>
          <div className="h-4" />
          <ReactApexChart
            height={300}
            options={donutData}
            type={donutData.chart?.type}
            series={donutSeries}
          />
          {donutSeries.map((item, index) => (
            <div key={index} className="flex item-center">
              <div className={"h-10 w-10 bg-[" + chartColors[index] + "]"} />
              <h1>{item}</h1>
            </div>
          ))}
        </Card>
      </div>
      <div className="h-4" />
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="col-span-2">
          <Card>
            <h1>Orders</h1>
            <ReactApexChart
              height={300}
              series={columnData.series}
              options={columnData}
              type={columnData.chart?.type}
            />
          </Card>
        </div>
        <Card>
          <h1 className="text-muted-foreground">Current Balance</h1>
          <h1 className="text-2xl">10,000$</h1>
        </Card>
      </div>
    </div>
  );
}
