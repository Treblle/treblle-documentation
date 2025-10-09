"use client";

import { Search } from "nextra/components";

import { css } from "~styled-system/css/css";
import { Box } from "~styled-system/jsx/box";

export function AppendSearch() {

    return (
        <Box className={css({gridArea: "sidebar"})}>
            <Search />
        </Box>
    );
}