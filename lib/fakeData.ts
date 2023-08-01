import { ApexOptions } from "apexcharts";

export const chartData: ApexOptions = {
  theme: {
    mode: "dark",
    palette: "palette1",
    monochrome: {
      enabled: false,
      color: "#255aee",
      shadeTo: "dark",
      shadeIntensity: 0.65,
    },
  },
  chart: {
    height: 350,
    type: "area",
    background: "transparent",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
};

export type Products = {
  id: string;
  name: string;
  image: string[];
  amount: number;
  price: number;
  status: "published" | "private";
};

export const products: Products[] = [
  {
    id: "728ed52f",
    name: "Nike shoes",
    image: ["/2225351_P.webp"],
    amount: 20,
    price: 200,
    status: "published",
  },
  {
    id: "489e1d42",
    name: "Froglon T-shirt",
    image: [],
    amount: 125,
    price: 60,
    status: "private",
  },
  {
    id: "489e1d42",
    name: "Halloween T-shirt",
    image: [],
    amount: 12,
    price: 45,
    status: "private",
  },
  // ...
];


