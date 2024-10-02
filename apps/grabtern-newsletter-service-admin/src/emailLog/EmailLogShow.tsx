import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { NEWSLETTER_TITLE_FIELD } from "../newsletter/NewsletterTitle";
import { SUBSCRIBER_TITLE_FIELD } from "../subscriber/SubscriberTitle";

export const EmailLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
