// Nextra theme must be imported after index.css so PandaCSS doesn't override default nextra styles
import "nextra-theme-docs/style.css";

import { css } from "../styled-system/css";

type ButtonSimpleProperties = {
    readonly children: React.ReactNode;
};

export function ButtonSimple({children} : ButtonSimpleProperties) {
    return <button className={css({bgColor: "gray.800", padding: "5px 14px", borderRadius: "8px", color: "white", cursor: "pointer"})}>{children}</button>;
}