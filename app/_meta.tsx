import { Search } from "nextra/components";

import { css } from "~styled-system/css/css";

export default {
    "--": {
        type: "separator",
        title: (
            <div
                className={css({
                    display: "flex",
                    alignItems: "center",
                    gap: "2",
                    width: { base: "80vw", md: "200px" },
                })}
            >
                <Search className={css({ width: "1000px" })} placeholder="Search..." />
            </div>
        ),
    },
    index: {
        title: "Quick start",
        theme: {
            breadcrumb: false,
        },
    },
    "getting-started": {
        title: "Getting Started",
        theme: {
            collapsed: false,
        },
    },
    "integrate-treblle": {
        title: "Integrate Treblle",
        theme: {
            collapsed: false,
        },
    },
    "explore-treblle": {
        title: "Explore Treblle",
        theme: {
            collapsed: false,
        },
    },
    "workflow-tutorials": {
        title: "Workflow Tutorials",
        theme: {
            collapsed: true,
        },
    },
    "resources": {
        title: "Resources",
        theme: {
            collapsed: true,
        },
    },
    "trust-center": {
        title: "Trust Center",
        theme: {
            collapsed: true,
        },
    },
};