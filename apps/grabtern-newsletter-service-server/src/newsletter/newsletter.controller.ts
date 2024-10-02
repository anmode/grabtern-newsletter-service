import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { NewsletterService } from "./newsletter.service";
import { NewsletterControllerBase } from "./base/newsletter.controller.base";

@swagger.ApiTags("newsletters")
@common.Controller("newsletters")
export class NewsletterController extends NewsletterControllerBase {
  constructor(protected readonly service: NewsletterService) {
    super(service);
  }
}
