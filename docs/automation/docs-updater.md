---
title: "Docs Updater"
metaTitle: "Docs Updater Automation - Treblle Documentation"
description: "How the automated docs updater script works, including Claude AI integration, JSON parsing, and GitHub PR creation."
---

# Docs Updater

The `docs-updater.mjs` script automates the process of keeping documentation in sync by using Claude AI to generate content changes and opening pull requests on the docs repository.

## How It Works

1. **Claude AI Integration** — The script sends context to the Claude API and receives a JSON response describing documentation changes to apply.
2. **Response Parsing** — The raw response from Claude is cleaned and parsed as JSON.
3. **PR Creation** — The script applies the changes and opens a pull request against the `main` branch of the docs repository.

## JSON Response Cleaning

Claude sometimes wraps its JSON output in a markdown code fence (e.g., ` ```json ... ``` `). The script now automatically strips these code fences before attempting to parse the response.

The cleaning step handles the following cases:

- ` ```json ` at the start of the response (case-insensitive)
- ` ``` ` at the start of the response (case-insensitive)
- ` ``` ` at the end of the response (case-insensitive)

```js
const cleanedResponse = responseText
  .replace(/^```json\s*/i, "")
  .replace(/^```\s*/i, "")
  .replace(/```\s*$/i, "")
  .trim();
```

If the cleaned response still cannot be parsed as valid JSON, the script logs an error and exits with a non-zero status code.

## Error Handling

| Scenario | Behaviour |
|---|---|
| Claude returns valid JSON | Changes are parsed and applied |
| Claude wraps JSON in code fences | Fences are stripped automatically before parsing |
| Claude returns invalid JSON | Error is logged and the process exits with code `1` |

## Output

When the process completes successfully, the script logs:

```
PR opened on docs repo!
```

A pull request is created targeting the `main` branch of the docs repository.
