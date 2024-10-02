import { Newsletter as TNewsletter } from "../api/newsletter/Newsletter";

export const NEWSLETTER_TITLE_FIELD = "title";

export const NewsletterTitle = (record: TNewsletter): string => {
  return record.title?.toString() || String(record.id);
};
