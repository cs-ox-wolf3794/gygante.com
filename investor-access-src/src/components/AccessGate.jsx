import { useMemo, useState } from "react";

const SESSION_KEY = "gqs_access_session_v1";

function parseAllowedUsers(value) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function getSession() {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) {
      return null;
    }

    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }

    if (typeof parsed.expiresAt !== "number" || parsed.expiresAt < Date.now()) {
      sessionStorage.removeItem(SESSION_KEY);
      return null;
    }

    return parsed;
  } catch {
    return null;
  }
}

function saveSession(user, ttlHours) {
  const expiresAt = Date.now() + ttlHours * 60 * 60 * 1000;
  sessionStorage.setItem(SESSION_KEY, JSON.stringify({ user, expiresAt }));
}

export default function AccessGate({ children }) {
  const enforceAccess = import.meta.env.VITE_ENFORCE_ACCESS !== "false";
  const requiredPassword = import.meta.env.VITE_SITE_ACCESS_PASSWORD || "";
  const allowedUsers = useMemo(
    () => parseAllowedUsers(import.meta.env.VITE_ALLOWED_USERS || ""),
    []
  );
  const sessionHours = Number(import.meta.env.VITE_ACCESS_SESSION_HOURS || 12);

  const [session, setSession] = useState(() => getSession());
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);

  const isLockedOut = attempts >= 5;

  if (!enforceAccess) {
    return children;
  }

  if (session) {
    const activeUser = session.user || "authorized-user";

    return (
      <>
        <div className="access-pill">
          <span>Access: {activeUser}</span>
          <button
            onClick={() => {
              sessionStorage.removeItem(SESSION_KEY);
              setSession(null);
              setUsername("");
              setPassword("");
            }}
          >
            Logout
          </button>
        </div>
        {children}
      </>
    );
  }

  if (!requiredPassword) {
    if (import.meta.env.DEV) {
      return (
        <div className="gate-wrapper shell">
          <section className="gate-card">
            <p className="eyebrow">Access Setup Required</p>
            <h1>Access control is disabled in local development.</h1>
            <p className="lead">
              Set VITE_SITE_ACCESS_PASSWORD in your environment before launch.
            </p>
            <button
              className="btn btn-primary"
              onClick={() => {
                saveSession("dev", 2);
                setSession(getSession());
              }}
            >
              Continue In Dev Mode
            </button>
          </section>
        </div>
      );
    }

    return (
      <div className="gate-wrapper shell">
        <section className="gate-card">
          <p className="eyebrow">Access Configuration Error</p>
          <h1>Protected mode is enabled but password is not configured.</h1>
          <p className="lead">Set VITE_SITE_ACCESS_PASSWORD in deployment environment variables.</p>
        </section>
      </div>
    );
  }

  if (!session) {
    const handleSubmit = (event) => {
      event.preventDefault();
      setError("");

      if (isLockedOut) {
        setError("Too many failed attempts. Reload the page to try again.");
        return;
      }

      const normalizedUser = username.trim().toLowerCase();

      if (allowedUsers.length > 0 && !allowedUsers.includes(normalizedUser)) {
        setAttempts((current) => current + 1);
        setError("This user is not authorized for access.");
        return;
      }

      if (password !== requiredPassword) {
        setAttempts((current) => current + 1);
        setError("Invalid credentials.");
        return;
      }

      saveSession(normalizedUser || "authorized-user", Number.isFinite(sessionHours) ? sessionHours : 12);
      setSession(getSession());
      setAttempts(0);
      setPassword("");
    };

    return (
      <div className="gate-wrapper shell">
        <section className="gate-card">
          <p className="eyebrow">Restricted Access</p>
          <h1>Authorized viewers only.</h1>
          <p className="lead">
            Enter your approved username and shared access password.
          </p>

          <form className="gate-form" onSubmit={handleSubmit}>
            <label>
              Username
              <input
                type="text"
                autoComplete="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </label>
            <label>
              Password
              <input
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </label>
            {error ? <p className="gate-error">{error}</p> : null}
            <button className="btn btn-primary" type="submit" disabled={isLockedOut}>
              Unlock Website
            </button>
          </form>
        </section>
      </div>
    );
  }
}
