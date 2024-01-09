import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;

CanvasJS.addColorSet("customColorSet", ["#0062ff", "#000"]);

export const ramAndGarbageUseOptions: any = {
  colorSet: "customColorSet",
  title: {
    text: "RAM & Garbage Use",
    fontSize: 20,
  },
  axisY: {
    title: "GB Used",
    labelFontSize: 12,
    titleFontSize: 10, // Taille de la police du titre de l'axe Y
    gridColor: "#e2e2e2",
    gridThickness: 0.5,
  },
  axisX: {
    labelFontSize: 12,
  },
  legend: {
    fontSize: 14,
  },
  data: [
    {
      type: "stackedArea",
      name: "Total Ram",
      showInLegend: true,
      dataPoints: [
        { x: 1, y: 0.5 },
        { x: 2, y: 0.5 },
        { x: 3, y: 0.6 },
        { x: 4, y: 0.5 },
        { x: 5, y: 0.9 },
        { x: 6, y: 1 },
        { x: 7, y: 0.5 },
        { x: 8, y: 0.8 },
        { x: 9, y: 0.2 },
        { x: 10, y: 0.5 },
        { x: 11, y: 0.6 },
        { x: 12, y: 0.6 },
        { x: 13, y: 0.8 },
        { x: 14, y: 2 },
        { x: 15, y: 2.2 },
        { x: 16, y: 3.5 },
        { x: 17, y: 3.5 },
        { x: 18, y: 3.5 },
        { x: 19, y: 3.6 },
        { x: 20, y: 3.5 },
        { x: 21, y: 4.5 },
        { x: 22, y: 7.5 },
        { x: 23, y: 6 },
        { x: 24, y: 4.7 },
        { x: 25, y: 4.5 },
        { x: 26, y: 7 },
        { x: 27, y: 9.5 },
        { x: 28, y: 10.5 },
        { x: 29, y: 10.5 },
        { x: 30, y: 11.5 },
        { x: 31, y: 12.5 },
        { x: 32, y: 15.5 },
        { x: 33, y: 18.5 },
        { x: 34, y: 25.5 },
        { x: 35, y: 22.5 },
        { x: 36, y: 40.5 },
      ],
    },
    {
      type: "stackedArea",
      name: "Garbage",
      showInLegend: true,
      dataPoints: [
        { x: 1, y: 0.5 },
        { x: 2, y: 0 },
        { x: 3, y: 0 },
        { x: 4, y: 0.5 },
        { x: 5, y: 0.5 },
        { x: 6, y: 0.5 },
        { x: 7, y: 0.5 },
        { x: 8, y: 0 },
        { x: 9, y: 0 },
        { x: 10, y: 0 },
        { x: 11, y: 0 },
        { x: 12, y: 2 },
        { x: 13, y: 0 },
        { x: 14, y: 0.5 },
        { x: 15, y: 0 },
        { x: 16, y: 0 },
        { x: 17, y: 0 },
        { x: 18, y: 0 },
        { x: 19, y: 0 },
        { x: 20, y: 1 },
        { x: 21, y: 0 },
        { x: 22, y: 0 },
        { x: 23, y: 0 },
        { x: 24, y: 0 },
        { x: 25, y: 0 },
        { x: 26, y: 0 },
        { x: 27, y: 0 },
        { x: 28, y: 0 },
        { x: 29, y: 0 },
        { x: 30, y: 0 },
        { x: 31, y: 0 },
        { x: 32, y: -10 },
        { x: 33, y: 0 },
        { x: 34, y: 0 },
        { x: 35, y: 0 },
      ],
    },
  ],
};

export const activeThreadsAndUsersOptions: any = {
  colorSet: "customColorSet",
  title: {
    text: "Active Threads & Connected Users",
    fontSize: 20, // Ajustez la taille de la police du titre ici
  },
  axisY: {
    title: "GB Used",
    labelFontSize: 12,
    titleFontSize: 10, // Taille de la police du titre de l'axe Y
    gridColor: "#e2e2e2", // Couleur des lignes de la grille pour l'axe Y
    gridThickness: 0.5,
  },
  axisX: {
    labelFontSize: 12,
  },
  legend: {
    fontSize: 14,
  },
  data: [
    {
      type: "column",
      name: "Active Threads",
      showInLegend: true,
      dataPoints: [
        {
          x: 1,
          y: 1.5,
        },
        {
          x: 2,
          y: 3.5,
        },
        {
          x: 3,
          y: 3.5,
        },
        {
          x: 4,
          y: 3,
        },
        {
          x: 5,
          y: 4.5,
        },
        {
          x: 6,
          y: 15,
        },
        {
          x: 7,
          y: 7,
        },
        {
          x: 8,
          y: 9.5,
        },
        {
          x: 9,
          y: 13.5,
        },
        {
          x: 10,
          y: 2.5,
        },
        {
          x: 11,
          y: 45.5,
        },
        {
          x: 12,
          y: 78.5,
        },
        {
          x: 13,
          y: 55.5,
        },
        {
          x: 14,
          y: 10.5,
        },
        {
          x: 15,
          y: 45.5,
        },
        {
          x: 16,
          y: 20.5,
        },
        {
          x: 17,
          y: 10.5,
        },
        {
          x: 18,
          y: 20.5,
        },
        {
          x: 19,
          y: 40.5,
        },
        {
          x: 20,
          y: 30.5,
        },
        {
          x: 21,
          y: 79.5,
        },
        {
          x: 22,
          y: 36,
        },
        {
          x: 23,
          y: 142.5,
        },
        {
          x: 24,
          y: 142.5,
        },
        {
          x: 25,
          y: 158.5,
        },
        {
          x: 26,
          y: 160.5,
        },
        {
          x: 27,
          y: 180.5,
        },
      ],
    },
    {
      type: "column",
      name: "Connected Users",
      showInLegend: true,
      dataPoints: [
        {
          x: 1,
          y: 10,
        },
        {
          x: 2,
          y: 30,
        },
        {
          x: 3,
          y: 5.5,
        },
        {
          x: 4,
          y: 9,
        },
        {
          x: 5,
          y: 20,
        },
        {
          x: 6,
          y: 9,
        },
        {
          x: 7,
          y: 38,
        },
        {
          x: 8,
          y: 30,
        },
        {
          x: 9,
          y: 33,
        },
        {
          x: 10,
          y: 37,
        },
        {
          x: 11,
          y: 40,
        },
        {
          x: 12,
          y: 45,
        },
        {
          x: 13,
          y: 40,
        },
        {
          x: 14,
          y: 37,
        },
        {
          x: 15,
          y: 48,
        },
        {
          x: 16,
          y: 52,
        },
        {
          x: 17,
          y: 60,
        },
        {
          x: 18,
          y: 73,
        },
        {
          x: 19,
          y: 79,
        },
        {
          x: 20,
          y: 120,
        },
        {
          x: 21,
          y: 130,
        },
        {
          x: 22,
          y: 110,
        },
        {
          x: 23,
          y: 120,
        },
        {
          x: 24,
          y: 180,
        },
        {
          x: 25,
          y: 160,
        },
        {
          x: 26,
          y: 200,
        },
        {
          x: 27,
          y: 220,
        },
      ],
    },
  ],
};

export const startupTimeOptions: any = {
  colorSet: "customColorSet",
  title: {
    text: "Startup Time Historic",
    fontSize: 20,
  },
  axisY: {
    title: "Time (seconds)",
    labelFontSize: 12,
    titleFontSize: 10, // Taille de la police du titre de l'axe Y
    gridColor: "#e2e2e2",
    gridThickness: 0.5,
  },
  axisX: {
    labelFontSize: 12,
  },
  legend: {
    fontSize: 14,
  },

  data: [
    {
      type: "line",
      name: "Startup Time",
      showInLegend: true,
      dataPoints: [
        {
          x: 1,
          y: 0.1,
        },
        {
          x: 2,
          y: 0.2,
        },
        {
          x: 3,
          y: 0.2,
        },
        {
          x: 4,
          y: 0.5,
        },
        {
          x: 5,
          y: 0.1,
        },
        {
          x: 6,
          y: 0.200,
        },
        {
          x: 7,
          y: 0.05,
        },
        {
          x: 8,
          y: 0.235,
        },
        {
          x: 9,
          y: 0.565,
        },
        {
          x: 10,
          y: 1.5,
        },
        {
          x: 11,
          y: 0.587,
        },
        {
          x: 12,
          y: 0.524,
        },
        {
          x: 13,
          y: 0.185,
        },
        {
          x: 14,
          y: 0.735,
        },
        {
          x: 15,
          y: 0.385,
        },
        {
          x: 16,
          y: 0.115,
        },
        {
          x: 17,
          y: 0.005,
        },
        {
          x: 18,
          y: 0.15,
        },
        {
          x: 19,
          y: 1,
        },
        {
          x: 20,
          y: 0.1,
        },
        {
          x: 21,
          y: 0.1,
        },
        {
          x: 22,
          y: 0.1,
        },
        {
          x: 23,
          y: 0.2,
        },
        {
          x: 24,
          y: 0.153,
        },
        {
          x: 25,
          y: 0.149,
        },
        {
          x: 26,
          y: 0.196,
        },
        {
          x: 27,
          y: 0.065,
        },
      ],
    },
  ],
};
