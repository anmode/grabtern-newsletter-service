import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  subscriberId?: SortOrder;
  subscriptionDate?: SortOrder;
  updatedAt?: SortOrder;
};
