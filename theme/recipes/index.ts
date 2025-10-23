import type { RecipeConfig } from "@pandacss/dev";

import { button } from "./button.ts";
import { card } from "./card.ts";
import { spinner } from "./spinner.ts";


export const recipes: Record<string, Partial<RecipeConfig>> = {
    button,
    card,
    spinner,
};

// export const slotRecipes: Record<string, Partial<SlotRecipeConfig>> = {
//     dialog,
// };
