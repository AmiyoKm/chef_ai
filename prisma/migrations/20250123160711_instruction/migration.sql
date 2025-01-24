/*
  Warnings:

  - You are about to drop the column `Instruction` on the `recipe` table. All the data in the column will be lost.
  - Added the required column `instruction` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instruction" TEXT NOT NULL,
    "vegan" BOOLEAN NOT NULL,
    "calorie" INTEGER,
    "tags" TEXT NOT NULL
);
INSERT INTO "new_recipe" ("calorie", "id", "ingredients", "tags", "title", "userId", "vegan") SELECT "calorie", "id", "ingredients", "tags", "title", "userId", "vegan" FROM "recipe";
DROP TABLE "recipe";
ALTER TABLE "new_recipe" RENAME TO "recipe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
