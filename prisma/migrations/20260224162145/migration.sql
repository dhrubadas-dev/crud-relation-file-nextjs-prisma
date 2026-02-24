/*
  Warnings:

  - You are about to drop the column `sImg` on the `StudentTable` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StudentTable" (
    "sId" TEXT NOT NULL PRIMARY KEY,
    "sFullName" TEXT NOT NULL,
    "sEmail" TEXT NOT NULL,
    "sGender" TEXT NOT NULL,
    "sPhoneNumber" TEXT NOT NULL,
    "teacherTableTId" TEXT NOT NULL,
    CONSTRAINT "StudentTable_teacherTableTId_fkey" FOREIGN KEY ("teacherTableTId") REFERENCES "TeacherTable" ("tId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_StudentTable" ("sEmail", "sFullName", "sGender", "sId", "sPhoneNumber", "teacherTableTId") SELECT "sEmail", "sFullName", "sGender", "sId", "sPhoneNumber", "teacherTableTId" FROM "StudentTable";
DROP TABLE "StudentTable";
ALTER TABLE "new_StudentTable" RENAME TO "StudentTable";
CREATE UNIQUE INDEX "StudentTable_sEmail_key" ON "StudentTable"("sEmail");
CREATE UNIQUE INDEX "StudentTable_sPhoneNumber_key" ON "StudentTable"("sPhoneNumber");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
