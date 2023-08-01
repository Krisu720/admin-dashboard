"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import Card from "@/components/Card";
import TradingBadge from "@/components/TradingBadge";
import { chartData } from "@/lib/fakeData";
import ReactApexChart from "react-apexcharts";


export default function Home() {
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
          <ReactApexChart
            height={350}
            options={chartData}
            series={chartData.series}
          />
        </Card>
        <Card>
          <h1>Sales</h1>
          <div className="h-4" />
          {/* {cities.map((item, index) => (
            <h1
              key={item.name}
              className={`text-${colors[index]}-500 flex w-full items-center`}
            >
              <div
                className={`bg-${colors[index]}-500 rounded-full h-2 w-2 mr-2`}
              />
              {item.name}{" "}
              <span className="dark:text-white text-black ml-auto">
                {item.sales}$
              </span>
            </h1>
          ))} */}
        </Card>
      </div>
      <div className="h-4" />
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="col-span-3"></div>
        <Card>
          <h1 className="text-muted-foreground">Current Balance</h1>
          <h1 className="text-2xl">10,000$</h1>
        </Card>
      </div>
    </div>
  );
}
