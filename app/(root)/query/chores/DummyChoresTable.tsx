import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

// Assuming this is your JSON data
const jsonData = [
  {
    "level": "Info",
    "processName": "Calc_Conso_Luxembourg",
    "lastExecutionDate": "2023-12-07 14:08:52",
    "duration": "5s",
    "executor": "Tache_Test_1",
    "fullLog": "Processus 'Calc_Conso_Luxembourg': exécution terminée normalement, temps écoulé 5.01 secondes",
    "version": "2023-10-09 09:44:00 (latest)"
  },
  {
    "level": "Info",
    "processName": "Calc_Conso_Belgique",
    "lastExecutionDate": "2023-12-07 14:08:48",
    "duration": "10s",
    "executor": "Tache_Test_1",
    "fullLog": "Processus 'Calc_Conso_Belgique': exécution terminée normalement, temps écoulé 10.00 secondes",
    "version": null
  },
  {
    "level": "Info",
    "processName": "Transac",
    "lastExecutionDate": "2023-12-06 16:10:54",
    "duration": "2m2s",
    "executor": "Admin",
    "fullLog": "Processus 'Transac': exécution terminée normalement, temps écoulé 122.94 secondes",
    "version": null
  }
];

const DummyChoresTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>LEVEL</TableHead>
          <TableHead>PROCESS NAME</TableHead>
          <TableHead>LAST EXECUTION DATE</TableHead>
          <TableHead>DURATION</TableHead>
          <TableHead>EXECUTOR</TableHead>
          <TableHead>FULL LOG</TableHead>
          <TableHead>VERSION</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {jsonData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.level}</TableCell>
            <TableCell>{item.processName}</TableCell>
            <TableCell>{item.lastExecutionDate}</TableCell>
            <TableCell>{item.duration}</TableCell>
            <TableCell>{item.executor}</TableCell>
            <TableCell>{item.fullLog}</TableCell>
            <TableCell>{item.version}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DummyChoresTable;