import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NEWSLETTER_TITLE_FIELD } from "../newsletter/NewsletterTitle";
import { SUBSCRIBER_TITLE_FIELD } from "../subscriber/SubscriberTitle";

export const EmailLogList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"EmailLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Newsletter"
          source="newsletter.id"
          reference="Newsletter"
        >
          <TextField source={NEWSLETTER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="sentAt" source="sentAt" />
        <TextField label="status" source="status" />
        <ReferenceField
          label="Subscriber"
          source="subscriber.id"
          reference="Subscriber"
        >
          <TextField source={SUBSCRIBER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
