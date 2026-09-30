# Hero Component

The `Hero` component is used across marketing and informational pages to render a full-width hero section with a background image and one or two CTA buttons.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `linkPrimary` | `string` | No | URL for the primary CTA button |
| `secondaryButton` | `string` | No | Label text for the secondary CTA button |
| `linkSecondary` | `string` | No | URL for the secondary CTA button |
| `background` | `string` | No | Path to the background image asset |

## Usage Example

```tsx
<Hero
  linkPrimary="/book-a-demo"
  secondaryButton="View Documentation"
  linkSecondary="https://docs.treblle.com/"
  background="/pages/how-it-works/hero/background.png"
/>
```

## Notes

- Both `linkPrimary` and `linkSecondary` are optional, but a button without a corresponding `link` prop will not be navigable. Always ensure each button has a matching link prop set.
- `linkSecondary` accepts both internal paths (e.g. `/pricing`) and fully qualified external URLs (e.g. `https://docs.treblle.com/`).
- The **How It Works** page (`app/(web)/how-it-works/page.tsx`) uses this component with `linkSecondary` pointing to `https://docs.treblle.com/`.
