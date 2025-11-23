import { PrismaLibSql } from "@prisma/adapter-libsql";
import { PrismaClient } from "../../generated/prisma/client";

const adapter = new PrismaLibSql({
	url: process.env.DATABASE_URL ?? "",
});

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
