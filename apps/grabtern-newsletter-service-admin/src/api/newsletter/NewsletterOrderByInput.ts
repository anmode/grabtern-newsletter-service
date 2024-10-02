import { SortOrder } from "../../util/SortOrder";

export type NewsletterOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sentAt?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
