import { SortOrder } from "../../util/SortOrder";

export type SubscriberOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  subscribedAt?: SortOrder;
  updatedAt?: SortOrder;
};
