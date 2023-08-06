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
    
    zoom: {enabled: false},
    height: 350,
    type: "area",
    background: "transparent",
    toolbar: {show:false},
  },

  grid: {
    strokeDashArray: 3,
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels:{ style:{colors: "#555"}}
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2023-09-01",
      "2023-09-02",
      "2023-09-03",
      "2023-09-04",
      "2023-09-05",
      "2023-09-06",
      "2023-09-07",
      "2023-09-08",
      "2023-09-09",
      "2023-09-10",
      "2023-09-11",
      "2023-09-12",
      "2023-09-13",
      "2023-09-14",
      "2023-09-15",
      "2023-09-16",
      "2023-09-17",
      "2023-09-18",
      "2023-09-19",
      "2023-09-20",
      "2023-09-21",
      "2023-09-22",
      "2023-09-23",
      "2023-09-24",
      "2023-09-25",
      "2023-09-26",
      "2023-09-27",
      "2023-09-28",
      "2023-09-29",
      "2023-09-30",
    ],
    labels: {
      style: {colors:"#555"}
    }
  },
  tooltip: {
    theme: "light",
    x: {
      format: "dd | MMM",
    },
  },
  series: [
    {
      type: "area",
      name: "Sales",
      data: [400, 600, 335, 720, 900, 190, 650,400, 600, 535, 720, 900, 190, 950,400, 600, 335, 720, 900, 490, 250,400, 600, 335, 720, 900, 190, 250,400, 600],
    },
    {
      type: "bar",
      name: "Orders",
      data: [14, 16, 13, 17, 22, 10, 13,15,17,10,4,7,10,13,24,13,22,13,32,12,12,15,16,12,14,13,13,15,8,4],
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
  {
    id: "489e1d42",
    name: "Halloween T-shirt",
    image: [],
    amount: 12,
    price: 45,
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
  {
    id: "489e1d42",
    name: "Halloween T-shirt",
    image: [],
    amount: 12,
    price: 45,
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
  {
    id: "489e1d42",
    name: "Halloween T-shirt",
    image: [],
    amount: 12,
    price: 45,
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
  {
    id: "489e1d42",
    name: "Halloween T-shirt",
    image: [],
    amount: 12,
    price: 45,
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
  {
    id: "whaaat",
    name: "Halloween T-shirt",
    image: [],
    amount: 12,
    price: 45,
    status: "private",
  },
  {
    id: "xdxdxdxd",
    name: "Halloween T-shirt",
    image: [],
    amount: 12,
    price: 45,
    status: "private",
  },
  // ...
];


