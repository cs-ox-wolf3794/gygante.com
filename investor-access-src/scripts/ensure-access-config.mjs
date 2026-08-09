const enforceAccess = process.env.VITE_ENFORCE_ACCESS !== "false";
const requiredPassword = (process.env.VITE_SITE_ACCESS_PASSWORD || "").trim();

if (!enforceAccess) {
  console.log("[access-config] Access enforcement disabled; skipping password check.");
  process.exit(0);
}

if (!requiredPassword) {
  console.error("[access-config] Missing VITE_SITE_ACCESS_PASSWORD while VITE_ENFORCE_ACCESS is enabled.");
  process.exit(1);
}

const placeholders = new Set([
  "<your-real-password>",
  "changeme",
  "change-me",
  "password",
  "your-password-here"
]);

if (placeholders.has(requiredPassword.toLowerCase())) {
  console.error("[access-config] Refusing to build with placeholder password value.");
  process.exit(1);
}

console.log("[access-config] Access configuration validated.");
