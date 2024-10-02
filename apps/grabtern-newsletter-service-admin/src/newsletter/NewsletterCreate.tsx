import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { EmailLogTitle } from "../emailLog/EmailLogTitle";

export const NewsletterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
