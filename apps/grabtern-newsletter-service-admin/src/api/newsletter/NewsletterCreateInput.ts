import { EmailLogCreateNestedManyWithoutNewslettersInput } from "./EmailLogCreateNestedManyWithoutNewslettersInput";

export type NewsletterCreateInput = {
  content?: string | null;
  emailLogs?: EmailLogCreateNestedManyWithoutNewslettersInput;
  sentAt?: Date | null;
  title?: string | null;
};
