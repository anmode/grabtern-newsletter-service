import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailLogService } from "./emailLog.service";
import { EmailLogControllerBase } from "./base/emailLog.controller.base";

@swagger.ApiTags("emailLogs")
@common.Controller("emailLogs")
export class EmailLogController extends EmailLogControllerBase {
  constructor(protected readonly service: EmailLogService) {
    super(service);
  }
}
