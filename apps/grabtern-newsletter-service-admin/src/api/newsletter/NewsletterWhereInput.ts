import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmailLogListRelationFilter } from "../emailLog/EmailLogListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type NewsletterWhereInput = {
  content?: StringNullableFilter;
  emailLogs?: EmailLogListRelationFilter;
  id?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
