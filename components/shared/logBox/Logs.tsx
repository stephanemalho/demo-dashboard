import { dashboard } from "@/data/dashboard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

import LiveContainer from "../boxContainer/LiveContainer";

const Logs = () => {
  const data = dashboard;
  const logs = data.Logs;

  return (
    <LiveContainer logHeight="h-[50vh]" title="Live Logs">
      <Table className="background-light800_dark400 text-lg">
        <TableCaption>A list of recent Logs.</TableCaption>
        <TableBody className="code-font dark:text-slate-400">
          {Object.keys(logs).map((logKey) => {
            const logEntry = logs[logKey as unknown as keyof typeof logs];
            const formattedTimestamp = moment(logEntry.TimeStamp).format(' h:mm:ss a, MMMM Do YYYY');

            return (
              <TableRow key={logKey}>
                <TableCell className="font-medium" title="ThreadId">
                  {logEntry.ThreadID}
                </TableCell>
                <TableCell title="SessionID">{logEntry.SessionID}</TableCell>
                <TableCell title="Level">{logEntry.Level}</TableCell>
                <TableCell className="max-w-[170px] truncate" title="TimeStamp">{formattedTimestamp}</TableCell>
                <TableCell title="Logger">{logEntry.Logger}</TableCell>
                <TableCell  className="w-[50%] truncate" title="Message">{logEntry.Message}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </LiveContainer>
  );
};

export default Logs;
