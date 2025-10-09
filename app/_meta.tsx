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
};
