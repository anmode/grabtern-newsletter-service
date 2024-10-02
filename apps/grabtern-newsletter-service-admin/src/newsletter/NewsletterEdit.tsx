import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { EmailLogTitle } from "../emailLog/EmailLogTitle";

export const NewsletterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceArrayInput source="emailLogs" reference="EmailLog">
          <SelectArrayInput
            optionText={EmailLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <DateTimeInput label="sentAt" source="sentAt" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
