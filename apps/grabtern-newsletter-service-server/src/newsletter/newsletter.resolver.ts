import * as graphql from "@nestjs/graphql";
import { NewsletterResolverBase } from "./base/newsletter.resolver.base";
import { Newsletter } from "./base/Newsletter";
import { NewsletterService } from "./newsletter.service";

@graphql.Resolver(() => Newsletter)
export class NewsletterResolver extends NewsletterResolverBase {
  constructor(protected readonly service: NewsletterService) {
    super(service);
  }
}
