import { Subscriber as TSubscriber } from "../api/subscriber/Subscriber";

export const SUBSCRIBER_TITLE_FIELD = "name";

export const SubscriberTitle = (record: TSubscriber): string => {
  return record.name?.toString() || String(record.id);
};
