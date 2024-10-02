import { EmailLogUpdateManyWithoutNewslettersInput } from "./EmailLogUpdateManyWithoutNewslettersInput";

export type NewsletterUpdateInput = {
  content?: string | null;
  emailLogs?: EmailLogUpdateManyWithoutNewslettersInput;
  sentAt?: Date | null;
  title?: string | null;
};
