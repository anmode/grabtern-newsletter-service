import { EmailLog } from "../emailLog/EmailLog";

export type Newsletter = {
  content: string | null;
  createdAt: Date;
  emailLogs?: Array<EmailLog>;
  id: string;
  sentAt: Date | null;
  title: string | null;
  updatedAt: Date;
};
