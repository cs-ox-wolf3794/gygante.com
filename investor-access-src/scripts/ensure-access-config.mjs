const enforceAccess = (process.env.VITE_ENFORCE_ACCESS ?? "true").toLowerCase() !== "false";
const requiredPassword = process.env.VITE_SITE_ACCESS_PASSWORD ?? "";
const allowEmptyPassword = (process.env.VITE_ALLOW_EMPTY_ACCESS_PASSWORD ?? "false").toLowerCase() === "true";

if (!enforceAccess) {
  process.exit(0);
}

if (!requiredPassword && !allowEmptyPassword) {
  console.error("\n[auth-check] Build blocked.");
  console.error("[auth-check] VITE_ENFORCE_ACCESS=true, but VITE_SITE_ACCESS_PASSWORD is missing.");
  console.error("[auth-check] This would deploy a non-functional gate (configuration error screen).");
  console.error("\nSet VITE_SITE_ACCESS_PASSWORD before build, for example:");
  console.error('  PowerShell: $env:VITE_SITE_ACCESS_PASSWORD = "<strong-password>"');
  console.error("\nIf you intentionally want to bypass this check for local tests only:");
  console.error('  $env:VITE_ALLOW_EMPTY_ACCESS_PASSWORD = "true"');
  process.exit(1);
}

if (requiredPassword && requiredPassword.length < 10) {
  console.warn("[auth-check] Warning: VITE_SITE_ACCESS_PASSWORD is shorter than 10 characters.");
}
