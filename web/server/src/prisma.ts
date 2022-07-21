import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'] // Qualquer operação que o prisma realizar ele vai dar no log
});