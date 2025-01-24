/*
  Warnings:

  - You are about to drop the `recipeTag` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tags` to the `recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "recipeTag";
PRAGMA foreign_keys=on;

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
    "calorie" INTEGER,
    "tags" TEXT NOT NULL
);
INSERT INTO "new_recipe" ("Instruction", "calorie", "id", "ingredients", "title", "userId", "vegan") SELECT "Instruction", "calorie", "id", "ingredients", "title", "userId", "vegan" FROM "recipe";
DROP TABLE "recipe";
ALTER TABLE "new_recipe" RENAME TO "recipe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
