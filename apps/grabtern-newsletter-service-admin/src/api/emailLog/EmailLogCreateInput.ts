import { NewsletterWhereUniqueInput } from "../newsletter/NewsletterWhereUniqueInput";
import { SubscriberWhereUniqueInput } from "../subscriber/SubscriberWhereUniqueInput";

export type EmailLogCreateInput = {
  newsletter?: NewsletterWhereUniqueInput | null;
  sentAt?: Date | null;
  status?: "Option1" | null;
  subscriber?: SubscriberWhereUniqueInput | null;
};
