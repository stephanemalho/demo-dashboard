export interface LogEntry {
  ID: number;
  ThreadID: number;
  SessionID: number;
  Level: string;
  TimeStamp: string;
  Logger: string;
  Message: string;
}

interface MenuItemsInterface {
  title: string;
  children?: MenuItemsInterface[];
}

export type LogsRecord = { [key: string]: LogEntry };

export interface DashboardInterface {
  State: {
    Value: string;
  };
  RAM: {
    Value: number;
  };
  Users: {
    [key: string]: string;
  };
  AllUsers: {
    [key: string]: string;
  };
  Threads: {
    [key: number]: {
      ID: number;
      Type: string;
      Name: string;
      Context: string;
      State: string;
      Function: string;
      ObjectType: string;
      ObjectName: string;
      RLocks: number;
      IXLocks: number;
      WLocks: number;
      ElapsedTime: string;
      WaitTime: string;
      Info: string;
    };
  };
  Logs: { [key: number]: LogEntry };
}

export interface MenuItemInterface {
  title: string;
  children?: MenuItemInterface[];
  parentTitle?: string;
}

export interface TreemapInterface {
  name: string;
  children?: TreemapInterface[];
  size?: number;
}

export const treeMap: TreemapInterface[] = [
  {
    name: "Axis",
    size: 24593,
  },
  {
    name: "Axes",
    size: 1302,
  },
  {
    name: "AxisGridLine",
    size: 652,
  },
  {
    name: "AxisLabel",
    size: 636,
  },
  {
    name: "CartesianAxes",
    size: 6703,
  },
  {
    name: "controls",
    size: 8435,
  },
  {
    name: "data",
    size: 19382,
  },
  {
    name: "ScaleBinding",
    size: 11275,
  },
  {
    name: "TreeBuilder",
    size: 9930,
  },
  {
    name: "Tree",
    size: 7147,
  },
];

export const menuItems: MenuItemInterface[] = [
  {
    title: "Activity",
    children: [
      {
        title: "Cubes",
        children: [
          {
            title: "Activité",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "Cube2",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "InfoCube",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "Suivi congés",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "TMA - Activity",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
              {
                title: "Chores",
              },
              {
                title: "Control Objects",
              },
            ],
          },
        ],
      },
      {
        title: "Dimensions",
        children: [
          {
            title: "Activité",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "Cube2",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "InfoCube",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "Suivi congés",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "TMA - Activity",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
        ],
      },
      {
        title: "Processes",
        children: [
          {
            title: "Activité",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "Cube2",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "InfoCube",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "Suivi congés",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
          {
            title: "TMA - Activity",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Process",
              },
            ],
          },
        ],
      },
      {
        title: "Chores",
        children: [
          {
            title: "Activité",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Chores",
              },
            ],
          },
          {
            title: "Cube2",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Chores",
              },
            ],
          },
          {
            title: "InfoCube",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Chores",
              },
            ],
          },
          {
            title: "Suivi congés",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Chores",
              },
            ],
          },
          {
            title: "TMA - Activity",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Chores",
              },
            ],
          },
        ],
      },
      {
        title: "Control Objects",
        children: [
          {
            title: "Activité",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Control Objects",
              },
            ],
          },
          {
            title: "Cube2",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Control Objects",
              },
            ],
          },
          {
            title: "InfoCube",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Control Objects",
              },
            ],
          },
          {
            title: "Suivi congés",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Control Objects",
              },
            ],
          },
          {
            title: "TMA - Activity",
            children: [
              {
                title: "Dimensions",
              },
              {
                title: "Views",
              },
              {
                title: "Control Objects",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const dashboard: DashboardInterface = {
  State: {
    Value: "Online",
  },
  RAM: {
    Value: 60806086,
  },
  Users: {
    "0": "Admin",
    "1": "Cloe",
    "2": "Juliette",
    "3": "Marius",
    "4": "Thomas",
    "5": "Idriss",
    "6": "Pseudo",
    "7": "FacetModel",
    "8": "DynamicConfig",
    "9": "Stats",
  },
  AllUsers: {
    "0": "Admin",
    "1": "Cloe",
    "2": "Juliette",
    "3": "Marius",
    "4": "Thomas",
    "5": "Idriss",
    "6": "Pseudo",
    "7": "FacetModel",
    "8": "DynamicConfig",
    "9": "Stats",
  },
  Threads: {
    "0": {
      ID: 63244,
      Type: "System",
      Name: "Pseudo",
      Context: "Tm1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "1": {
      ID: 3520,
      Type: "System",
      Name: "DynamicConfig",
      Context: "Tm1py",
      State: "Wait",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "2": {
      ID: 476,
      Type: "System",
      Name: "Stats",
      Context: "Tm1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "3": {
      ID: 65744,
      Type: "System",
      Name: "FacetModel",
      Context: "Tm1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "4": {
      ID: 53088,
      Type: "User",
      Name: "Admin",
      Context: "Architect",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "5": {
      ID: 63540,
      Type: "User",
      Name: "Admin",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "6": {
      ID: 27588,
      Type: "User",
      Name: "Juliette",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Belgique`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 2,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "10 S",
      WaitTime: "0 S",
      Info: "",
    },
    "7": {
      ID: 8808,
      Type: "User",
      Name: "Thomas",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "8": {
      ID: 8076,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "9": {
      ID: 23080,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "10": {
      ID: 27548,
      Type: "User",
      Name: "Thomas",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "11": {
      ID: 62680,
      Type: "User",
      Name: "Cloe",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "12": {
      ID: 57172,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "13": {
      ID: 16160,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "14": {
      ID: 68828,
      Type: "User",
      Name: "Admin",
      Context: "TM1py",
      State: "Run",
      Function: "GET /api/v1/Threads",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "15": {
      ID: 65064,
      Type: "User",
      Name: "Juliette",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "16": {
      ID: 34576,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "17": {
      ID: 8808,
      Type: "User",
      Name: "Thomas",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "18": {
      ID: 8076,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "19": {
      ID: 23080,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "20": {
      ID: 27548,
      Type: "User",
      Name: "Thomas",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "21": {
      ID: 62680,
      Type: "User",
      Name: "Cloe",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "22": {
      ID: 57172,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Idle",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "23": {
      ID: 16160,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "Run",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "24": {
      ID: 68828,
      Type: "User",
      Name: "Admin",
      Context: "TM1py",
      State: "Run",
      Function: "GET /api/v1/Threads",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "25": {
      ID: 65064,
      Type: "User",
      Name: "Juliette",
      Context: "TM1py",
      State: "Wait",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
    "26": {
      ID: 34576,
      Type: "User",
      Name: "Marius",
      Context: "TM1py",
      State: "",
      Function: "POST /api/v1/Processes(`Calc_Conso_Luxembourg`)/tm1.Execute",
      ObjectType: "",
      ObjectName: "",
      RLocks: 0,
      IXLocks: 0,
      WLocks: 0,
      ElapsedTime: "0 S",
      WaitTime: "0 S",
      Info: "",
    },
  },
  Logs: {
    "0": {
      ID: 2829892948,
      ThreadID: 43992,
      SessionID: 92905,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:00.648",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "1": {
      ID: 2829892949,
      ThreadID: 20632,
      SessionID: 92906,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:00.725",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Thomas`",
    },
    "2": {
      ID: 2829892950,
      ThreadID: 32000,
      SessionID: 92907,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:01.552",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "3": {
      ID: 2829892951,
      ThreadID: 40500,
      SessionID: 92904,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:05.663",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "4": {
      ID: 2829892952,
      ThreadID: 43992,
      SessionID: 92905,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:10.663",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.02 secondes",
    },
    "5": {
      ID: 2829892953,
      ThreadID: 20632,
      SessionID: 92906,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:10.740",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.02 secondes",
    },
    "6": {
      ID: 2829892954,
      ThreadID: 32000,
      SessionID: 92907,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:11.566",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "7": {
      ID: 2829892955,
      ThreadID: 58904,
      SessionID: 92909,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:13.629",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "8": {
      ID: 2829892956,
      ThreadID: 62484,
      SessionID: 92910,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:14.176",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "9": {
      ID: 2829892957,
      ThreadID: 27740,
      SessionID: 92911,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:17.457",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Thomas`",
    },
    "10": {
      ID: 2829892958,
      ThreadID: 13120,
      SessionID: 92912,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:20.504",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Thomas`",
    },
    "11": {
      ID: 2829892959,
      ThreadID: 58904,
      SessionID: 92909,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:23.642",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "12": {
      ID: 2829892960,
      ThreadID: 62484,
      SessionID: 92910,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:24.192",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.02 secondes",
    },
    "13": {
      ID: 2829892961,
      ThreadID: 66716,
      SessionID: 92913,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:26.251",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "14": {
      ID: 2829892962,
      ThreadID: 27740,
      SessionID: 92911,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:27.467",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "15": {
      ID: 2829892963,
      ThreadID: 25448,
      SessionID: 92914,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:27.743",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "16": {
      ID: 2829892964,
      ThreadID: 26408,
      SessionID: 92915,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:29.516",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Thomas`",
    },
    "17": {
      ID: 2829892965,
      ThreadID: 13120,
      SessionID: 92912,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:30.514",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "18": {
      ID: 2829892966,
      ThreadID: 57528,
      SessionID: 92916,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:32.558",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Thomas`",
    },
    "19": {
      ID: 2829892967,
      ThreadID: 20644,
      SessionID: 92917,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:32.714",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Marius`",
    },
    "20": {
      ID: 2829892968,
      ThreadID: 20748,
      SessionID: 92918,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:32.777",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Cloe`",
    },
    "21": {
      ID: 2829892969,
      ThreadID: 26408,
      SessionID: 92915,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:34.523",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "22": {
      ID: 2829892970,
      ThreadID: 66716,
      SessionID: 92913,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:36.254",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "23": {
      ID: 2829892971,
      ThreadID: 24276,
      SessionID: 92919,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:36.584",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "24": {
      ID: 2829892972,
      ThreadID: 20644,
      SessionID: 92917,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:37.717",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.00 secondes",
    },
    "25": {
      ID: 2829892973,
      ThreadID: 25448,
      SessionID: 92914,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:37.749",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "26": {
      ID: 2829892974,
      ThreadID: 20748,
      SessionID: 92918,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:37.779",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.00 secondes",
    },
    "27": {
      ID: 2829892975,
      ThreadID: 62260,
      SessionID: 92920,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:39.759",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "28": {
      ID: 2829892976,
      ThreadID: 19564,
      SessionID: 92921,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:39.791",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "29": {
      ID: 2829892977,
      ThreadID: 57528,
      SessionID: 92916,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:42.569",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "30": {
      ID: 2829892978,
      ThreadID: 44932,
      SessionID: 92922,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:44.639",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "31": {
      ID: 2829892979,
      ThreadID: 55340,
      SessionID: 92923,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:45.704",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "32": {
      ID: 2829892980,
      ThreadID: 24276,
      SessionID: 92919,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:46.599",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "33": {
      ID: 2829892981,
      ThreadID: 50652,
      SessionID: 92924,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:48.667",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "34": {
      ID: 2829892982,
      ThreadID: 62260,
      SessionID: 92920,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:49.764",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "35": {
      ID: 2829892983,
      ThreadID: 19564,
      SessionID: 92921,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:49.796",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "36": {
      ID: 2829892984,
      ThreadID: 19736,
      SessionID: 92926,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:51.809",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "37": {
      ID: 2829892985,
      ThreadID: 48608,
      SessionID: 92927,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:51.838",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Juliette`",
    },
    "38": {
      ID: 2829892986,
      ThreadID: 44932,
      SessionID: 92922,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:54.642",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "39": {
      ID: 2829892987,
      ThreadID: 55340,
      SessionID: 92923,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:55.720",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.02 secondes",
    },
    "40": {
      ID: 2829892988,
      ThreadID: 48608,
      SessionID: 92927,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:56.853",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "41": {
      ID: 2829892989,
      ThreadID: 46208,
      SessionID: 92928,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:58.323",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "42": {
      ID: 2829892990,
      ThreadID: 50652,
      SessionID: 92924,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:58.674",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "43": {
      ID: 2829892991,
      ThreadID: 40928,
      SessionID: 92929,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:58.918",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Juliette`",
    },
    "44": {
      ID: 2829892992,
      ThreadID: 15468,
      SessionID: 92930,
      Level: "Info",
      TimeStamp: "2023-10-12 14:53:59.841",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "45": {
      ID: 2829892993,
      ThreadID: 19736,
      SessionID: 92926,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:01.813",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "46": {
      ID: 2829892994,
      ThreadID: 16160,
      SessionID: 92931,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:03.878",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Marius`",
    },
    "47": {
      ID: 2829892995,
      ThreadID: 40928,
      SessionID: 92929,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:03.926",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "48": {
      ID: 2829892996,
      ThreadID: 27492,
      SessionID: 92933,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:05.982",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "49": {
      ID: 2829892997,
      ThreadID: 46208,
      SessionID: 92928,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:08.335",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "50": {
      ID: 2829892998,
      ThreadID: 16160,
      SessionID: 92931,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:08.886",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "51": {
      ID: 2829892999,
      ThreadID: 15468,
      SessionID: 92930,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:09.853",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "52": {
      ID: 2829893000,
      ThreadID: 44176,
      SessionID: 92934,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:11.914",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "53": {
      ID: 2829893001,
      ThreadID: 27492,
      SessionID: 92933,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:15.983",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "54": {
      ID: 2829893002,
      ThreadID: 44828,
      SessionID: 92935,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:16.684",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Thomas`",
    },
    "55": {
      ID: 2829893003,
      ThreadID: 36404,
      SessionID: 92936,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:17.791",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Cloe`",
    },
    "56": {
      ID: 2829893004,
      ThreadID: 44176,
      SessionID: 92934,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:21.922",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "57": {
      ID: 2829893005,
      ThreadID: 36404,
      SessionID: 92936,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:22.804",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "58": {
      ID: 2829893006,
      ThreadID: 4164,
      SessionID: 92937,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:24.849",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "59": {
      ID: 2829893007,
      ThreadID: 44828,
      SessionID: 92935,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:26.698",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "60": {
      ID: 2829893008,
      ThreadID: 6088,
      SessionID: 92938,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:28.760",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "61": {
      ID: 2829893009,
      ThreadID: 37308,
      SessionID: 92939,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:30.412",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "62": {
      ID: 2829893010,
      ThreadID: 4164,
      SessionID: 92937,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:34.861",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "63": {
      ID: 2829893011,
      ThreadID: 25464,
      SessionID: 92940,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:38.047",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "64": {
      ID: 2829893012,
      ThreadID: 6088,
      SessionID: 92938,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:38.770",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "65": {
      ID: 2829893013,
      ThreadID: 37308,
      SessionID: 92939,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:40.425",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "66": {
      ID: 2829893014,
      ThreadID: 29216,
      SessionID: 92941,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:40.750",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "67": {
      ID: 2829893015,
      ThreadID: 8808,
      SessionID: 92942,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:40.830",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Thomas`",
    },
    "68": {
      ID: 2829893016,
      ThreadID: 56220,
      SessionID: 92943,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:42.481",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "69": {
      ID: 2829893017,
      ThreadID: 57136,
      SessionID: 92944,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:43.990",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Cloe`",
    },
    "70": {
      ID: 2829893018,
      ThreadID: 8808,
      SessionID: 92942,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:45.843",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "71": {
      ID: 2829893019,
      ThreadID: 25464,
      SessionID: 92940,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:48.055",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "72": {
      ID: 2829893020,
      ThreadID: 57136,
      SessionID: 92944,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:48.994",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.00 secondes",
    },
    "73": {
      ID: 2829893021,
      ThreadID: 9240,
      SessionID: 92945,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:50.109",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Juliette`",
    },
    "74": {
      ID: 2829893022,
      ThreadID: 29216,
      SessionID: 92941,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:50.753",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "75": {
      ID: 2829893023,
      ThreadID: 62680,
      SessionID: 92946,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:50.939",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Cloe`",
    },
    "76": {
      ID: 2829893024,
      ThreadID: 16016,
      SessionID: 92947,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:51.032",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "77": {
      ID: 2829893025,
      ThreadID: 56220,
      SessionID: 92943,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:52.484",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "78": {
      ID: 2829893026,
      ThreadID: 34576,
      SessionID: 92948,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:54.530",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "79": {
      ID: 2829893027,
      ThreadID: 9240,
      SessionID: 92945,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:55.123",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "80": {
      ID: 2829893028,
      ThreadID: 23080,
      SessionID: 92949,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:56.926",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "81": {
      ID: 2829893029,
      ThreadID: 13204,
      SessionID: 92950,
      Level: "Info",
      TimeStamp: "2023-10-12 14:54:57.175",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Thomas`",
    },
    "82": {
      ID: 2829893030,
      ThreadID: 62680,
      SessionID: 92946,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:00.945",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "83": {
      ID: 2829893031,
      ThreadID: 16016,
      SessionID: 92947,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:01.038",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "84": {
      ID: 2829893032,
      ThreadID: 65064,
      SessionID: 92951,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:03.014",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "85": {
      ID: 2829893033,
      ThreadID: 13520,
      SessionID: 92952,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:03.098",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "86": {
      ID: 2829893034,
      ThreadID: 34576,
      SessionID: 92948,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:04.539",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "87": {
      ID: 2829893035,
      ThreadID: 23080,
      SessionID: 92949,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:06.938",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "88": {
      ID: 2829893036,
      ThreadID: 13204,
      SessionID: 92950,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:07.187",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "89": {
      ID: 2829893037,
      ThreadID: 27548,
      SessionID: 92954,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:07.891",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Thomas`",
    },
    "90": {
      ID: 2829893038,
      ThreadID: 57172,
      SessionID: 92955,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:08.981",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "91": {
      ID: 2829893039,
      ThreadID: 8076,
      SessionID: 92956,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:09.230",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Luxembourg` executed by user `Marius`",
    },
    "92": {
      ID: 2829893040,
      ThreadID: 70040,
      SessionID: 92957,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:12.818",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Marius`",
    },
    "93": {
      ID: 2829893041,
      ThreadID: 65064,
      SessionID: 92951,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:13.021",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "94": {
      ID: 2829893042,
      ThreadID: 13520,
      SessionID: 92952,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:13.114",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.02 secondes",
    },
    "95": {
      ID: 2829893043,
      ThreadID: 8076,
      SessionID: 92956,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:14.237",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Luxembourg`:  exécution terminée normalement, temps écoulé 5.01 secondes",
    },
    "96": {
      ID: 2829893044,
      ThreadID: 27548,
      SessionID: 92954,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:17.901",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.01 secondes",
    },
    "97": {
      ID: 2829893045,
      ThreadID: 57172,
      SessionID: 92955,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:18.983",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
    "98": {
      ID: 2829893046,
      ThreadID: 27588,
      SessionID: 92958,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:19.959",
      Logger: "TM1.Process",
      Message: "Process `Calc_Conso_Belgique` executed by user `Juliette`",
    },
    "99": {
      ID: 2829893047,
      ThreadID: 70040,
      SessionID: 92957,
      Level: "Info",
      TimeStamp: "2023-10-12 14:55:22.819",
      Logger: "TM1.Process",
      Message:
        "Processus `Calc_Conso_Belgique`:  exécution terminée normalement, temps écoulé 10.00 secondes",
    },
  },
};
