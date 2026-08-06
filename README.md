# Harbour — CDD Review Workbench

[Harbour](https://harbour-cdd-workbench.vercel.app/) is a fictional internal workbench for analysts conducting Customer Due Diligence (CDD) on simple UK limited-company onboarding cases. It is a portfolio product, not a production compliance system.

## Problem

CDD analysts need to assess evidence across company identity, ownership, business activity, source of funds, and intended account use—while documenting defensible judgments and follow-up work. Fragmented evidence and inconsistent review coverage make that operationally difficult.

## Product philosophy

Harbour supports human judgment. It organises evidence, highlights issues, structures conclusions, and preserves an audit trail; it does not make autonomous decisions, use black-box scores, or replace the analyst.

## Core workflow

`Queued → In review → Awaiting information → Approve or Escalate`

Analysts complete six evidence-review sections, resolve or transfer linked issues, assess qualitative risk dimensions, record a proposed disposition, and commit a final decision package.

## Key capabilities

- Coverage-led review across six CDD sections
- Linked evidence inventory, provenance, versions, and contextual detail
- Structured issues, blocking state, resolution outcomes, and escalation transfer
- Multi-item Information Requests with partial-response assessment and follow-up rounds
- Gated synthesis, qualitative risk assessment, and approval/escalation final review
- Complete audit history and operational Team Lead workload views

## Demo scenarios

- Standard approval following a customer response
- Active Information Request requiring analyst follow-up
- Post-response reassessment with a second request round
- Ownership scope exception requiring early escalation

## Product scope

The MVP supports privately owned UK limited companies with one or two individual beneficial owners and a simple direct ownership structure. It models one workflow: business customer onboarding CDD review.

## Explicit exclusions

Transaction monitoring, periodic reviews, customer portal or messaging, OCR, biometrics, sanctions APIs, live registries, automated risk scoring, AI recommendations, maker-checker review, specialist workflows, analytics, and production compliance claims are outside scope.

## Tech stack

React, TypeScript, Vite, Vinext, Nitro, and static local fixtures/evidence artefacts.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

For a production-output check:

```bash
npm run build
node .output/server/index.mjs
```

## Deployment

Vercel builds the application with `npm run build` and deploys the Nitro output in `.output`, as configured in [`vercel.json`](./vercel.json). No environment variables, database, external API, or paid service is required.

## Live demo

https://harbour-cdd-workbench.vercel.app/

## Demo disclaimer

All companies, people, documents, financial figures, and captured public-source evidence are synthetic portfolio artefacts. Harbour performs no live verification and does not provide regulatory decisions.
