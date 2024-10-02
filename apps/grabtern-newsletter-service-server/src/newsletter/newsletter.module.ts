import { Module } from "@nestjs/common";
import { NewsletterModuleBase } from "./base/newsletter.module.base";
import { NewsletterService } from "./newsletter.service";
import { NewsletterController } from "./newsletter.controller";
import { NewsletterResolver } from "./newsletter.resolver";

@Module({
  imports: [NewsletterModuleBase],
  controllers: [NewsletterController],
  providers: [NewsletterService, NewsletterResolver],
  exports: [NewsletterService],
})
export class NewsletterModule {}
