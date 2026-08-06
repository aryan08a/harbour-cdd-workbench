# [Working Name] — CDD Review Workbench

A fictional portfolio product demonstrating human-led Customer Due Diligence review for simple UK limited-company onboarding cases.

## Run locally

Requires Node.js 22.13 or newer.

```bash
npm ci
npm run dev
```

Use **Reset demo data** in the application header to restore the four original fictional scenarios after an interactive walkthrough.

## Validation

```bash
npm run lint
npm run build
```

## Deployment readiness

The application is self-contained: it uses local TypeScript fixtures and static demo artefacts, with no database, credentials, paid service, or external API requirement. The production build is suitable for a free Vercel or Cloudflare Pages deployment. Configure the deployment root as this repository and use the existing `npm run build` command.

## Demo disclosure

All companies, people, documents, financial figures, and captured public-source evidence are synthetic portfolio artifacts. The application does not perform live verification or provide regulatory decisions.
