import { dashboard } from "@/data/dashboard";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";
import TableRows from "./logs-components/TableRows";

const Logs = () => {
  const data = dashboard;
  const logs = data.Logs;

  return (
    <div className="m-auto flex h-full w-full overflow-hidden">
    <Table className="z-[1] text-[0.7rem] max-2xl:text-[0.5rem]">
      <TableHeader className="sticky top-0">
        <TableRows className="bg-[#e2e2e2]" />
      </TableHeader>
      <TableBody className="code-font">
        {Object.keys(logs).map((logKey) => {
          const logEntry = logs[logKey as unknown as keyof typeof logs];
          const formattedTimestamp = moment(logEntry.TimeStamp).format(
            "h:mm:ss a, MMMM"
          );
          return (
            <TableRow key={logKey} className="font-bold hover:bg-[#E0E0E1]">
              <TableCell title="ThreadId">{logEntry.ThreadID}</TableCell>
              <TableCell title="SessionID">{logEntry.SessionID}</TableCell>
              <TableCell title="Level">{logEntry.Level}</TableCell>
              <TableCell className="max-w-[80px] truncate" title="TimeStamp">
                {formattedTimestamp}
              </TableCell>
              <TableCell title="Logger">{logEntry.Logger}</TableCell>
              <TableCell className="w-[50%] truncate" title="Message">
                {logEntry.Message}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    </div>
  );
};

export default Logs;
