import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;

CanvasJS.addColorSet("customColorSet", ["#0062ff", "#FA4D56"]);

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
        { x: 3, y: 0.5 },
        { x: 4, y: 0.5 },
        { x: 5, y: 0.5 },
        { x: 6, y: 0.5 },
        { x: 7, y: 0.5 },
        { x: 8, y: 0.5 },
        { x: 9, y: 0.5 },
        { x: 10, y: 0.5 },
        { x: 11, y: 0.5 },
        { x: 12, y: 0.5 },
        { x: 13, y: 0.5 },
        { x: 14, y: 0.5 },
        { x: 15, y: 0.5 },
        { x: 16, y: 0.5 },
        { x: 17, y: 0.5 },
        { x: 18, y: 0.5 },
        { x: 19, y: 0.5 },
        { x: 20, y: 0.5 },
        { x: 21, y: 0.5 },
        { x: 22, y: 0.5 },
        { x: 23, y: 0.5 },
        { x: 24, y: 0.5 },
        { x: 25, y: 0.5 },
        { x: 26, y: 0.5 },
        { x: 27, y: 0.5 },
        { x: 28, y: 0.5 },
        { x: 29, y: 0.5 },
        { x: 30, y: 0.5 },
        { x: 31, y: 0.5 },
        { x: 32, y: 0.5 },
        { x: 33, y: 0.5 },
        { x: 34, y: 0.5 },
        { x: 35, y: 0.5 },
        { x: 36, y: 0.5 },
      ],
    },
    {
      type: "stackedArea",
      name: "Garbage",
      showInLegend: true,
      dataPoints: [
        { x: 1, y: 0.5 },
        { x: 2, y: 0.5 },
        { x: 3, y: 0.5 },
        { x: 4, y: 0.5 },
        { x: 5, y: 0.5 },
        { x: 6, y: 0.5 },
        { x: 7, y: 0.5 },
        { x: 8, y: 0.5 },
        { x: 9, y: 0.5 },
        { x: 10, y: 0.5 },
        { x: 11, y: 0.5 },
        { x: 12, y: 0.5 },
        { x: 13, y: 0.5 },
        { x: 14, y: 0.5 },
        { x: 15, y: 0.5 },
        { x: 16, y: 0.5 },
        { x: 17, y: 0.5 },
        { x: 18, y: 0.5 },
        { x: 19, y: 0.5 },
        { x: 20, y: 0.5 },
        { x: 21, y: 0.5 },
        { x: 22, y: 0.5 },
        { x: 23, y: 0.5 },
        { x: 24, y: 0.5 },
        { x: 25, y: 0.5 },
        { x: 26, y: 0.5 },
        { x: 27, y: 0.5 },
        { x: 28, y: 0.5 },
        { x: 29, y: 0.5 },
        { x: 30, y: 0.5 },
        { x: 31, y: 0.5 },
        { x: 32, y: 0.5 },
        { x: 33, y: 0.5 },
        { x: 34, y: 0.5 },
        { x: 35, y: 0.5 },
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
          y: 0.5,
        },
        {
          x: 2,
          y: 0.5,
        },
        {
          x: 3,
          y: 0.5,
        },
        {
          x: 4,
          y: 0.5,
        },
        {
          x: 5,
          y: 0.5,
        },
        {
          x: 6,
          y: 0.5,
        },
        {
          x: 7,
          y: 0.5,
        },
        {
          x: 8,
          y: 0.5,
        },
        {
          x: 9,
          y: 0.5,
        },
        {
          x: 10,
          y: 0.5,
        },
        {
          x: 11,
          y: 0.5,
        },
        {
          x: 12,
          y: 0.5,
        },
        {
          x: 13,
          y: 0.5,
        },
        {
          x: 14,
          y: 0.5,
        },
        {
          x: 15,
          y: 0.5,
        },
        {
          x: 16,
          y: 0.5,
        },
        {
          x: 17,
          y: 0.5,
        },
        {
          x: 18,
          y: 0.5,
        },
        {
          x: 19,
          y: 0.5,
        },
        {
          x: 20,
          y: 0.5,
        },
        {
          x: 21,
          y: 0.5,
        },
        {
          x: 22,
          y: 0.5,
        },
        {
          x: 23,
          y: 0.5,
        },
        {
          x: 24,
          y: 0.5,
        },
        {
          x: 25,
          y: 0.5,
        },
        {
          x: 26,
          y: 0.5,
        },
        {
          x: 27,
          y: 0.5,
        },
        {
          x: 28,
          y: 0.5,
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
          y: 0.5,
        },
        {
          x: 2,
          y: 0.5,
        },
        {
          x: 3,
          y: 0.5,
        },
        {
          x: 4,
          y: 0.5,
        },
        {
          x: 5,
          y: 0.5,
        },
        {
          x: 6,
          y: 0.5,
        },
        {
          x: 7,
          y: 0.5,
        },
        {
          x: 8,
          y: 0.5,
        },
        {
          x: 9,
          y: 0.5,
        },
        {
          x: 10,
          y: 0.5,
        },
        {
          x: 11,
          y: 0.5,
        },
        {
          x: 12,
          y: 0.5,
        },
        {
          x: 13,
          y: 0.5,
        },
        {
          x: 14,
          y: 0.5,
        },
        {
          x: 15,
          y: 0.5,
        },
        {
          x: 16,
          y: 0.5,
        },
        {
          x: 17,
          y: 0.5,
        },
        {
          x: 18,
          y: 0.5,
        },
        {
          x: 19,
          y: 0.5,
        },
        {
          x: 20,
          y: 0.5,
        },
        {
          x: 21,
          y: 0.5,
        },
        {
          x: 22,
          y: 0.5,
        },
        {
          x: 23,
          y: 0.5,
        },
        {
          x: 24,
          y: 0.5,
        },
        {
          x: 25,
          y: 0.5,
        },
        {
          x: 26,
          y: 0.5,
        },
        {
          x: 27,
          y: 0.5,
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
          y: 0.5,
        },
        {
          x: 2,
          y: 0.5,
        },
        {
          x: 3,
          y: 0.5,
        },
        {
          x: 4,
          y: 0.5,
        },
        {
          x: 5,
          y: 0.5,
        },
        {
          x: 6,
          y: 0.5,
        },
        {
          x: 7,
          y: 0.5,
        },
        {
          x: 8,
          y: 0.5,
        },
        {
          x: 9,
          y: 0.5,
        },
        {
          x: 10,
          y: 0.5,
        },
        {
          x: 11,
          y: 0.5,
        },
        {
          x: 12,
          y: 0.5,
        },
        {
          x: 13,
          y: 0.5,
        },
        {
          x: 14,
          y: 0.5,
        },
        {
          x: 15,
          y: 0.5,
        },
        {
          x: 16,
          y: 0.5,
        },
        {
          x: 17,
          y: 0.5,
        },
        {
          x: 18,
          y: 0.5,
        },
        {
          x: 19,
          y: 0.5,
        },
        {
          x: 20,
          y: 0.5,
        },
        {
          x: 21,
          y: 0.5,
        },
        {
          x: 22,
          y: 0.5,
        },
        {
          x: 23,
          y: 0.5,
        },
        {
          x: 24,
          y: 0.5,
        },
        {
          x: 25,
          y: 0.5,
        },
        {
          x: 26,
          y: 0.5,
        },
        {
          x: 27,
          y: 0.5,
        },
      ],
    },
  ],
};
