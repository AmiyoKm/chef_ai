/*
  Warnings:

  - You are about to alter the column `calorie` on the `recipe` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_recipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "Instruction" TEXT NOT NULL,
    "vegan" BOOLEAN NOT NULL,
    "calorie" INTEGER
);
INSERT INTO "new_recipe" ("Instruction", "calorie", "id", "ingredients", "title", "userId", "vegan") SELECT "Instruction", "calorie", "id", "ingredients", "title", "userId", "vegan" FROM "recipe";
DROP TABLE "recipe";
ALTER TABLE "new_recipe" RENAME TO "recipe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
