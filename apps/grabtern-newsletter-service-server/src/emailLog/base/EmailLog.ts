/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsString,
  ValidateNested,
  IsOptional,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Newsletter } from "../../newsletter/base/Newsletter";
import { EnumEmailLogStatus } from "./EnumEmailLogStatus";
import { Subscriber } from "../../subscriber/base/Subscriber";

@ObjectType()
class EmailLog {
  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Newsletter,
  })
  @ValidateNested()
  @Type(() => Newsletter)
  @IsOptional()
  newsletter?: Newsletter | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  sentAt!: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumEmailLogStatus,
  })
  @IsEnum(EnumEmailLogStatus)
  @IsOptional()
  @Field(() => EnumEmailLogStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => Subscriber,
  })
  @ValidateNested()
  @Type(() => Subscriber)
  @IsOptional()
  subscriber?: Subscriber | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { EmailLog as EmailLog };
