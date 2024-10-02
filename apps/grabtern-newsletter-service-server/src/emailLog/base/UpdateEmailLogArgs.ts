/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EmailLogWhereUniqueInput } from "./EmailLogWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { EmailLogUpdateInput } from "./EmailLogUpdateInput";

@ArgsType()
class UpdateEmailLogArgs {
  @ApiProperty({
    required: true,
    type: () => EmailLogWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EmailLogWhereUniqueInput)
  @Field(() => EmailLogWhereUniqueInput, { nullable: false })
  where!: EmailLogWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => EmailLogUpdateInput,
  })
  @ValidateNested()
  @Type(() => EmailLogUpdateInput)
  @Field(() => EmailLogUpdateInput, { nullable: false })
  data!: EmailLogUpdateInput;
}

export { UpdateEmailLogArgs as UpdateEmailLogArgs };