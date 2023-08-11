import { ApexOptions } from "apexcharts";

export const areaChart = (theme: "light" | "dark"): ApexOptions => {
  return {
    colors: chartColors,
    theme: {
      mode: theme,
    },
    chart: {
      zoom: { enabled: false },
      height: 500,
      type: "area",

      background: "transparent",
      toolbar: { show: false },
    },
    grid: {
      strokeDashArray: 5,
      borderColor: theme === "dark" ? "#FFFFFF" : "#cfcfcf",
    },
    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
      width: 4,
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
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
    },
    tooltip: {
      theme: theme,
      x: {
        format: "dd | MMM",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 0.2,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [10, 70],
      },
    },
    series: [
      {
        type: "area",
        name: "Sales",
        data: [
          400, 600, 335, 720, 900, 190, 650, 400, 600, 535, 720, 900, 190, 950,
          400, 600, 335, 720, 900, 490, 250, 400, 600, 335, 720, 900, 190, 250,
          400, 600,
        ],
      },
      {
        type: "area",
        name: "Profit",
        data: [
          300, 400, 235, 420, 600, 490, 550, 200, 300, 435, 720, 300, 690, 450,
          200, 400, 535, 320, 200, 690, 450, 400, 100, 735, 220, 400, 390, 250,
          400, 300,
        ],
      },
    ],
  };
};

export const donutChart = (theme: "light" | "dark"): ApexOptions => {
  return {
    colors: chartColors,
    theme: {
      mode: theme,
    },
    chart: {
      type: "donut",
      background: "transparent",
    },
    legend: {
      show: false,
    },
    labels: ["Taxes", "Production Costs", "Profit"],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
            },
            name: {},
            value: {},
          },
        },
      },
    },
  };
};

export const columnChart = (theme: "light" | "dark"): ApexOptions => {
  return {
    theme: {
      mode: theme,
    },
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
      zoom: { enabled: false },
      background: "transparent",
    },
    grid: {
      strokeDashArray: 5,
    },
    colors: chartColors,
    legend: {},
    dataLabels: {
      enabled: false
    },
    series: [{ data: [42, 53, 73, 13, 53, 33,42,63,13,23,31,34,14,31,63,31,31,21,35,11,32, 73, 13, 53, 33,42,42,23,41,71], name: "orders", type: "bar" }],
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
    }
  };
};

export const chartColors = [
  "#449DD1",
  "#F86624",
  "#EA3546",
  "#662E9B",
  "#C5D86D",
];
