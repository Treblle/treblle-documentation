import Link from "next/link";
import type { ComponentProps } from "react";

// Drop-in replacement for next/link used across the nav: external links
// (absolute http/https URLs) open in a new tab; internal links behave normally.
export function NavLink({ href, ...props }: ComponentProps<typeof Link>) {
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  return (
    <Link
      href={href}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}
