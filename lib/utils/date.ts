import moment from "moment";

export function formatLogDate(info : any) {
  const timestamp = info.getValue() as string;
  const formattedTimestamp = moment(timestamp, "YYYY-MM-DD HH:mm:ss.SSS").format("YYYY-MM-DD HH:mm");
  return formattedTimestamp;
}
