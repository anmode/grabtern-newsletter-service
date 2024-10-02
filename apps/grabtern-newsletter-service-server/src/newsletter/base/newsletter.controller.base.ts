/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { NewsletterService } from "../newsletter.service";
import { NewsletterCreateInput } from "./NewsletterCreateInput";
import { Newsletter } from "./Newsletter";
import { NewsletterFindManyArgs } from "./NewsletterFindManyArgs";
import { NewsletterWhereUniqueInput } from "./NewsletterWhereUniqueInput";
import { NewsletterUpdateInput } from "./NewsletterUpdateInput";
import { EmailLogFindManyArgs } from "../../emailLog/base/EmailLogFindManyArgs";
import { EmailLog } from "../../emailLog/base/EmailLog";
import { EmailLogWhereUniqueInput } from "../../emailLog/base/EmailLogWhereUniqueInput";

export class NewsletterControllerBase {
  constructor(protected readonly service: NewsletterService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Newsletter })
  async createNewsletter(
    @common.Body() data: NewsletterCreateInput
  ): Promise<Newsletter> {
    return await this.service.createNewsletter({
      data: data,
      select: {
        content: true,
        createdAt: true,
        id: true,
        sentAt: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Newsletter] })
  @ApiNestedQuery(NewsletterFindManyArgs)
  async newsletters(@common.Req() request: Request): Promise<Newsletter[]> {
    const args = plainToClass(NewsletterFindManyArgs, request.query);
    return this.service.newsletters({
      ...args,
      select: {
        content: true,
        createdAt: true,
        id: true,
        sentAt: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Newsletter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async newsletter(
    @common.Param() params: NewsletterWhereUniqueInput
  ): Promise<Newsletter | null> {
    const result = await this.service.newsletter({
      where: params,
      select: {
        content: true,
        createdAt: true,
        id: true,
        sentAt: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Newsletter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateNewsletter(
    @common.Param() params: NewsletterWhereUniqueInput,
    @common.Body() data: NewsletterUpdateInput
  ): Promise<Newsletter | null> {
    try {
      return await this.service.updateNewsletter({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          id: true,
          sentAt: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Newsletter })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteNewsletter(
    @common.Param() params: NewsletterWhereUniqueInput
  ): Promise<Newsletter | null> {
    try {
      return await this.service.deleteNewsletter({
        where: params,
        select: {
          content: true,
          createdAt: true,
          id: true,
          sentAt: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/emailLogs")
  @ApiNestedQuery(EmailLogFindManyArgs)
  async findEmailLogs(
    @common.Req() request: Request,
    @common.Param() params: NewsletterWhereUniqueInput
  ): Promise<EmailLog[]> {
    const query = plainToClass(EmailLogFindManyArgs, request.query);
    const results = await this.service.findEmailLogs(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        newsletter: {
          select: {
            id: true,
          },
        },

        sentAt: true,
        status: true,

        subscriber: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/emailLogs")
  async connectEmailLogs(
    @common.Param() params: NewsletterWhereUniqueInput,
    @common.Body() body: EmailLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      emailLogs: {
        connect: body,
      },
    };
    await this.service.updateNewsletter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/emailLogs")
  async updateEmailLogs(
    @common.Param() params: NewsletterWhereUniqueInput,
    @common.Body() body: EmailLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      emailLogs: {
        set: body,
      },
    };
    await this.service.updateNewsletter({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/emailLogs")
  async disconnectEmailLogs(
    @common.Param() params: NewsletterWhereUniqueInput,
    @common.Body() body: EmailLogWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      emailLogs: {
        disconnect: body,
      },
    };
    await this.service.updateNewsletter({
      where: params,
      data,
      select: { id: true },
    });
  }
}