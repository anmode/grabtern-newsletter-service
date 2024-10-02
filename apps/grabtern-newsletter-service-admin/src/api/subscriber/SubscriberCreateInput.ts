import { EmailLogCreateNestedManyWithoutSubscribersInput } from "./EmailLogCreateNestedManyWithoutSubscribersInput";
import { SubscriptionCreateNestedManyWithoutSubscribersInput } from "./SubscriptionCreateNestedManyWithoutSubscribersInput";

export type SubscriberCreateInput = {
  email?: string | null;
  emailLogs?: EmailLogCreateNestedManyWithoutSubscribersInput;
  name?: string | null;
  subscribedAt?: Date | null;
  subscriptions?: SubscriptionCreateNestedManyWithoutSubscribersInput;
};
