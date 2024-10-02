import { StringFilter } from "../../util/StringFilter";
import { NewsletterWhereUniqueInput } from "../newsletter/NewsletterWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SubscriberWhereUniqueInput } from "../subscriber/SubscriberWhereUniqueInput";

export type EmailLogWhereInput = {
  id?: StringFilter;
  newsletter?: NewsletterWhereUniqueInput;
  sentAt?: DateTimeNullableFilter;
  status?: "Option1";
  subscriber?: SubscriberWhereUniqueInput;
};
