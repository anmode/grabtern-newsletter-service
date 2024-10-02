import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { NEWSLETTER_TITLE_FIELD } from "../newsletter/NewsletterTitle";
import { SUBSCRIBER_TITLE_FIELD } from "./SubscriberTitle";

export const SubscriberShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="subscribedAt" source="subscribedAt" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="EmailLog"
          target="subscriberId"
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
        <ReferenceManyField
          reference="Subscription"
          target="subscriberId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Subscriber"
              source="subscriber.id"
              reference="Subscriber"
            >
              <TextField source={SUBSCRIBER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="subscriptionDate" source="subscriptionDate" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
