import { StringFilter } from "../../util/StringFilter";
import { SubscriberWhereUniqueInput } from "../subscriber/SubscriberWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SubscriptionWhereInput = {
  id?: StringFilter;
  subscriber?: SubscriberWhereUniqueInput;
  subscriptionDate?: DateTimeNullableFilter;
};
