import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { NewsletterTitle } from "../newsletter/NewsletterTitle";
import { SubscriberTitle } from "../subscriber/SubscriberTitle";

export const EmailLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="newsletter.id"
          reference="Newsletter"
          label="Newsletter"
        >
          <SelectInput optionText={NewsletterTitle} />
        </ReferenceInput>
        <DateTimeInput label="sentAt" source="sentAt" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="subscriber.id"
          reference="Subscriber"
          label="Subscriber"
        >
          <SelectInput optionText={SubscriberTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
