# gygante.com

Gygante Quantitative Systems.

## Structure

- `/` : Main marketing site (`index.html`)
- `/investor-access-src/` : Source code for protected React/Vite investor application
- `/investor-access/` : Generated static output published by GitHub Pages

## Investor Access App

The investor app is configured for subpath hosting at `/investor-access/`.

### Local Development

```powershell
cd investor-access-src
npm install
npm run dev
```

Open: `http://localhost:5173/investor-access/` (hash routes are used for GitHub Pages compatibility)

### Production Build

```powershell
cd investor-access-src
npm run build
```

Build output is generated directly in `investor-access/`.

### Access Control Variables

Set these in deployment environment variables:

- `VITE_ENFORCE_ACCESS=true`
- `VITE_SITE_ACCESS_PASSWORD=<strong-password>`
- `VITE_ALLOWED_USERS=<comma,separated,usernames>`
- `VITE_ACCESS_SESSION_HOURS=12`

For GitHub-hosted builds, create repository secrets with these exact names:

- `VITE_SITE_ACCESS_PASSWORD`
- `VITE_ALLOWED_USERS`
- `VITE_ACCESS_SESSION_HOURS`

Then run the workflow in `.github/workflows/build-investor-access.yml` from the Actions tab.

See `investor-access-src/ACCESS_CONTROL.md` for full details.
