/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  EmailLog as PrismaEmailLog,
  Newsletter as PrismaNewsletter,
  Subscriber as PrismaSubscriber,
} from "@prisma/client";

export class EmailLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.EmailLogCountArgs, "select">): Promise<number> {
    return this.prisma.emailLog.count(args);
  }

  async emailLogs(
    args: Prisma.EmailLogFindManyArgs
  ): Promise<PrismaEmailLog[]> {
    return this.prisma.emailLog.findMany(args);
  }
  async emailLog(
    args: Prisma.EmailLogFindUniqueArgs
  ): Promise<PrismaEmailLog | null> {
    return this.prisma.emailLog.findUnique(args);
  }
  async createEmailLog(
    args: Prisma.EmailLogCreateArgs
  ): Promise<PrismaEmailLog> {
    return this.prisma.emailLog.create(args);
  }
  async updateEmailLog(
    args: Prisma.EmailLogUpdateArgs
  ): Promise<PrismaEmailLog> {
    return this.prisma.emailLog.update(args);
  }
  async deleteEmailLog(
    args: Prisma.EmailLogDeleteArgs
  ): Promise<PrismaEmailLog> {
    return this.prisma.emailLog.delete(args);
  }

  async getNewsletter(parentId: string): Promise<PrismaNewsletter | null> {
    return this.prisma.emailLog
      .findUnique({
        where: { id: parentId },
      })
      .newsletter();
  }

  async getSubscriber(parentId: string): Promise<PrismaSubscriber | null> {
    return this.prisma.emailLog
      .findUnique({
        where: { id: parentId },
      })
      .subscriber();
  }
}
