import { SubscriberWhereUniqueInput } from "../subscriber/SubscriberWhereUniqueInput";

export type SubscriptionCreateInput = {
  subscriber?: SubscriberWhereUniqueInput | null;
  subscriptionDate?: Date | null;
};
