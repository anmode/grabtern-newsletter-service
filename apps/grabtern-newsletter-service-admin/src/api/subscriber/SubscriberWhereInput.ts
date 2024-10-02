import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmailLogListRelationFilter } from "../emailLog/EmailLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type SubscriberWhereInput = {
  email?: StringNullableFilter;
  emailLogs?: EmailLogListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  subscribedAt?: DateTimeNullableFilter;
  subscriptions?: SubscriptionListRelationFilter;
};
