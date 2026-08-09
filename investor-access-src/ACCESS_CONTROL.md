# Access Control Guide

## What Is Implemented In-App

The app now includes a frontend access gate with:
- Username check against `VITE_ALLOWED_USERS` (optional)
- Password check via `VITE_SITE_ACCESS_PASSWORD`
- Session expiration via `VITE_ACCESS_SESSION_HOURS`
- Manual logout

This is useful as a first barrier, but by itself it is not strong security because frontend code can be inspected.

## Required Launch Configuration

1. Copy `.env.example` to a secure environment variable setup in your host.
2. Set a strong value for `VITE_SITE_ACCESS_PASSWORD`.
3. Set `VITE_ALLOWED_USERS` to approved usernames.
4. Keep `VITE_ENFORCE_ACCESS=true`.

### Deployment Safety Check

`npm run build` now runs a pre-build authentication check.

- If `VITE_ENFORCE_ACCESS=true` and `VITE_SITE_ACCESS_PASSWORD` is missing, the build fails.
- This prevents publishing a site that only shows the configuration error screen.

PowerShell example before building:

```powershell
$env:VITE_ENFORCE_ACCESS = "true"
$env:VITE_SITE_ACCESS_PASSWORD = "<strong-password>"
$env:VITE_ALLOWED_USERS = "first.last,investor.user"
$env:VITE_ACCESS_SESSION_HOURS = "12"
npm run build
```

## Recommended Real Protection In Production

Use platform-level access control in front of the app:
- Cloudflare Access (identity-based allow list)
- Nginx/Apache basic auth at reverse proxy
- Netlify Identity/Gated access
- Hosting provider authentication middleware

Best practice is using both layers:
- Edge or proxy authentication as the primary control
- App-level gate as a secondary control

## Build And Run

- Development: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
