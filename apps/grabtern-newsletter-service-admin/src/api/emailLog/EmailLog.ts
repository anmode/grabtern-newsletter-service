import { Newsletter } from "../newsletter/Newsletter";
import { Subscriber } from "../subscriber/Subscriber";

export type EmailLog = {
  createdAt: Date;
  id: string;
  newsletter?: Newsletter | null;
  sentAt: Date | null;
  status?: "Option1" | null;
  subscriber?: Subscriber | null;
  updatedAt: Date;
};
