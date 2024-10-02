import { Subscriber } from "../subscriber/Subscriber";

export type Subscription = {
  createdAt: Date;
  id: string;
  subscriber?: Subscriber | null;
  subscriptionDate: Date | null;
  updatedAt: Date;
};
