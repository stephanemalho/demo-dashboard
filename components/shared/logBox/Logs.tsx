import { dashboard } from "@/data/dashboard";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";
import moment from "moment";

const Logs = () => {
  const data = dashboard;
  const logs = data.Logs;

  return (
      <Table className="background-light800_dark400 text-[0.7rem] dark:border-slate-700 max-2xl:text-[0.5rem] ">
        <TableBody className="code-font ">
          {Object.keys(logs).map((logKey) => {
            const logEntry = logs[logKey as unknown as keyof typeof logs];
            const formattedTimestamp = moment(logEntry.TimeStamp).format('h:mm:ss a, MMMM');

            return (
              <TableRow key={logKey} className=" py-0 hover:bg-[#E0E0E1]">
                <TableCell className="font-medium" title="ThreadId">
                  {logEntry.ThreadID}
                </TableCell>
                <TableCell title="SessionID">{logEntry.SessionID}</TableCell>
                <TableCell title="Level">{logEntry.Level}</TableCell>
                <TableCell className="max-w-[80px] truncate" title="TimeStamp">{formattedTimestamp}</TableCell>
                <TableCell title="Logger">{logEntry.Logger}</TableCell>
                <TableCell  className="w-[50%] truncate" title="Message">{logEntry.Message}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  );
};

export default Logs;
