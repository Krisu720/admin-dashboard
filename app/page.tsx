"use client";

import Breadcrumbs from "@/components/Breadcrumbs";
import { chartdata, cities, colors } from "@/lib/fakeData";
import {
  Card,
  Metric,
  Text,
  AreaChart,
  Title,
  DonutChart,
} from "@tremor/react";

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const dataFormatter = (number: number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};

export default function Home() {
  return (
    <div>
      <Breadcrumbs />
      <div className="h-4" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card decoration="top" decorationColor="indigo">
          <Text>Sales</Text>
          <Metric>9,000$</Metric>
        </Card>
        <Card decoration="top" decorationColor="emerald">
          <Text>Visitors</Text>
          <Metric>11 421</Metric>
        </Card>
        <Card decoration="top" decorationColor="fuchsia">
          <Text>Orders</Text>
          <Metric>150</Metric>
        </Card>
        <Card decoration="top" decorationColor="orange">
          <Text>New Orders</Text>
          <Metric>6</Metric>
        </Card>
      </div>
      <div className="h-4" />
      <div className="grid lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3">
          <Title>Total Sales</Title>
          <AreaChart
            data={chartdata}
            index="date"
            categories={["SemiAnalysis", "The Pragmatic Engineer"]}
            colors={["indigo", "cyan"]}
            valueFormatter={dataFormatter}
          />
        </Card>
        <Card>
          <Title>Sales</Title>
          <DonutChart
            className="mt-6"
            data={cities}
            category="sales"
            index="name"
            valueFormatter={valueFormatter}
            colors={colors}
          />
          <div className="h-4" />
          {cities.map((item, index) => (
            <h1
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
          ))}
        </Card>
      </div>
    </div>
  );
}
