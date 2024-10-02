import { EmailLogUpdateManyWithoutSubscribersInput } from "./EmailLogUpdateManyWithoutSubscribersInput";
import { SubscriptionUpdateManyWithoutSubscribersInput } from "./SubscriptionUpdateManyWithoutSubscribersInput";

export type SubscriberUpdateInput = {
  email?: string | null;
  emailLogs?: EmailLogUpdateManyWithoutSubscribersInput;
  name?: string | null;
  subscribedAt?: Date | null;
  subscriptions?: SubscriptionUpdateManyWithoutSubscribersInput;
};
