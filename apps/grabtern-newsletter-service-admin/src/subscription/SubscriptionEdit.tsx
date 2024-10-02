import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { SubscriberTitle } from "../subscriber/SubscriberTitle";

export const SubscriptionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
