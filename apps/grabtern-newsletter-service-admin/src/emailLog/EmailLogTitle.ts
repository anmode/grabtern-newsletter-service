import { EmailLog as TEmailLog } from "../api/emailLog/EmailLog";

export const EMAILLOG_TITLE_FIELD = "id";

export const EmailLogTitle = (record: TEmailLog): string => {
  return record.id?.toString() || String(record.id);
};
