import type { RecipeConfig } from "@pandacss/dev";

import { button } from "./button.ts";
import { spinner } from "./spinner.ts";


export const recipes: Record<string, Partial<RecipeConfig>> = {
    button,
    spinner,
};

// export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
//     dialog,
// };
