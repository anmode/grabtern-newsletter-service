import { EmailLog } from "../emailLog/EmailLog";
import { Subscription } from "../subscription/Subscription";

export type Subscriber = {
  createdAt: Date;
  email: string | null;
  emailLogs?: Array<EmailLog>;
  id: string;
  name: string | null;
  subscribedAt: Date | null;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};
