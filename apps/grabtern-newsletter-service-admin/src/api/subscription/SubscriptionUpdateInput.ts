import { SubscriberWhereUniqueInput } from "../subscriber/SubscriberWhereUniqueInput";

export type SubscriptionUpdateInput = {
  subscriber?: SubscriberWhereUniqueInput | null;
  subscriptionDate?: Date | null;
};
