/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Logg } from "@prisma/client";

export class LoggServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LoggFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoggFindManyArgs>
  ): Promise<number> {
    return this.prisma.logg.count(args);
  }

  async findMany<T extends Prisma.LoggFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoggFindManyArgs>
  ): Promise<Logg[]> {
    return this.prisma.logg.findMany(args);
  }
  async findOne<T extends Prisma.LoggFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoggFindUniqueArgs>
  ): Promise<Logg | null> {
    return this.prisma.logg.findUnique(args);
  }
  async create<T extends Prisma.LoggCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoggCreateArgs>
  ): Promise<Logg> {
    return this.prisma.logg.create<T>(args);
  }
  async update<T extends Prisma.LoggUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoggUpdateArgs>
  ): Promise<Logg> {
    return this.prisma.logg.update<T>(args);
  }
  async delete<T extends Prisma.LoggDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LoggDeleteArgs>
  ): Promise<Logg> {
    return this.prisma.logg.delete(args);
  }
}