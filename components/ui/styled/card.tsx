import { ark } from "@ark-ui/react/factory";

import { styled } from "~styled-system/jsx";
import { card } from "~styled-system/recipes";
import type { ComponentProps } from "~styled-system/types";

export type CardProperties = ComponentProps<typeof Card>;
export const Card = styled(ark.div, card);
