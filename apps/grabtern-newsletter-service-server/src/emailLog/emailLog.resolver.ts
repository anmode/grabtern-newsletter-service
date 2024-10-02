import * as graphql from "@nestjs/graphql";
import { EmailLogResolverBase } from "./base/emailLog.resolver.base";
import { EmailLog } from "./base/EmailLog";
import { EmailLogService } from "./emailLog.service";

@graphql.Resolver(() => EmailLog)
export class EmailLogResolver extends EmailLogResolverBase {
  constructor(protected readonly service: EmailLogService) {
    super(service);
  }
}
