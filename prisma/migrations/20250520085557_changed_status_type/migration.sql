/*
  Warnings:

  - You are about to alter the column `status` on the `Ticket` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Ticket" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "topic" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "resolution" TEXT,
    "cancelledReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "cancelledAt" DATETIME
);
INSERT INTO "new_Ticket" ("cancelledAt", "cancelledReason", "createdAt", "id", "message", "resolution", "status", "topic", "updatedAt") SELECT "cancelledAt", "cancelledReason", "createdAt", "id", "message", "resolution", "status", "topic", "updatedAt" FROM "Ticket";
DROP TABLE "Ticket";
ALTER TABLE "new_Ticket" RENAME TO "Ticket";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
