import { SortOrder } from "../../util/SortOrder";

export type EmailLogOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  newsletterId?: SortOrder;
  sentAt?: SortOrder;
  status?: SortOrder;
  subscriberId?: SortOrder;
  updatedAt?: SortOrder;
};
