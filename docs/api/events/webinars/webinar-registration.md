---
title: "Webinar Registration API"
metaTitle: "Webinar Registration API - Treblle Documentation"
description: "API reference for registering users to Treblle webinars via Zoom and Notion integrations, including required and optional request fields."
---

import PaginationCards from "~components/cards/pagination-cards";
import { NoteCard } from "~components/cards/note";
import { InfoTable } from "~components/cards/info-table";

# Webinar Registration API

Treblle provides three internal API routes for registering attendees to webinars. These routes handle Zoom Webinar registration, Zoom Meeting registration, and Notion-based webinar tracking.

---

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/api/events/webinars/join/zoom-webinars` | Register for a Zoom Webinar |
| `POST` | `/api/events/webinars/join/zoom` | Register for a Zoom Meeting |
| `POST` | `/api/events/webinars/notion` | Register via Notion integration |

---

## Request Body

All three endpoints accept the same request body shape:

```json
{
  "firstName": "Jane",
  "lastName": "Doe",
  "email": "jane.doe@example.com",
  "jobPosition": "Senior Engineer",
  "company": "Acme Corp",
  "zoomWebinarId": "12345678901",
  "turnstileToken": "<cloudflare-turnstile-token>",
  "webinarName": "API Security Deep Dive"
}
```

### Fields

<InfoTable title="Field" description="Details">
  <InfoTable.Row title="firstName" description="Required. The registrant's first name." />
  <InfoTable.Row title="lastName" description="Required. The registrant's last name." />
  <InfoTable.Row title="email" description="Required. The registrant's email address." />
  <InfoTable.Row title="jobPosition" description="Optional. The registrant's job title or position. When provided, stored in the Notion database under the 'Job Position' property." />
  <InfoTable.Row title="company" description="Optional. The registrant's company name. When provided, stored in the Notion database under the 'Company' property." />
  <InfoTable.Row title="zoomWebinarId" description="Required for Zoom routes. The ID of the Zoom Webinar or Meeting to register the attendee for." />
  <InfoTable.Row title="turnstileToken" description="Required. A valid Cloudflare Turnstile token for bot protection verification." />
  <InfoTable.Row title="webinarName" description="Required. The name of the webinar used for Notion database record creation." />
</InfoTable>

<NoteCard>
  The `jobPosition` and `company` fields are optional. If provided, they are conditionally written to the associated Notion database record as `rich_text` properties. If omitted, those properties are not set on the record.
</NoteCard>

---

## Notion Database Properties

When a registration is successfully processed, the following properties are written to the Notion database:

| Property | Type | Condition |
|----------|------|-----------|
| `Job Position` | `rich_text` | Written only if `jobPosition` is provided |
| `Company` | `rich_text` | Written only if `company` is provided |

---

## Webinar Registration Form

The front-end webinar registration form (`WebinarForm`) collects the following fields from the user. All fields marked with `*` are required to enable form submission.

| Field | Required | Notes |
|-------|----------|-------|
| First Name | Yes | |
| Last Name | Yes | |
| Email | Yes | |
| Job Position | Yes | Must be filled to enable the submit button |
| Company | Yes | Must be filled to enable the submit button |
| Turnstile CAPTCHA | Yes | Cloudflare bot protection |

<NoteCard>
  While `jobPosition` and `company` are marked optional at the API level, the registration form enforces them as required fields — the submit button remains disabled until both are filled in.
</NoteCard>

---

## Example Request

```bash
curl -X POST https://treblle.com/api/events/webinars/join/zoom-webinars \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Doe",
    "email": "jane.doe@example.com",
    "jobPosition": "Engineering Manager",
    "company": "Acme Corp",
    "zoomWebinarId": "98765432100",
    "turnstileToken": "<token>",
    "webinarName": "API Security Deep Dive"
  }'
```

---

<PaginationCards />
