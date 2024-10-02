import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { NEWSLETTER_TITLE_FIELD } from "./NewsletterTitle";
import { SUBSCRIBER_TITLE_FIELD } from "../subscriber/SubscriberTitle";

export const NewsletterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="sentAt" source="sentAt" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmailLog"
          target="newsletterId"
          label="EmailLogs"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
