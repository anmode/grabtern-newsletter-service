import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SubscriberTitle } from "../subscriber/SubscriberTitle";

export const SubscriptionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="subscriber.id"
          reference="Subscriber"
          label="Subscriber"
        >
          <SelectInput optionText={SubscriberTitle} />
        </ReferenceInput>
        <DateTimeInput label="subscriptionDate" source="subscriptionDate" />
      </SimpleForm>
    </Create>
  );
};
