import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Summary", end: true },
  { to: "/architecture", label: "Architecture" },
  { to: "/data-flow", label: "Data Flow" },
  { to: "/monetization", label: "Monetization" },
  { to: "/glossary", label: "Glossary" },
];

export default function Layout({ children }) {
  const location = useLocation();

  useEffect(() => {
    const blocks = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      blocks.forEach((block) => block.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    blocks.forEach((block, index) => {
      block.classList.remove("in");
      block.style.transitionDelay = `${index * 45}ms`;
      observer.observe(block);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <>
      <div className="ambient" aria-hidden="true" />
      <header className="site-header shell">
        <NavLink className="brand" to="/" aria-label="Gygante home" end>
          <span className="brand-dot" aria-hidden="true" />
          <span>Gygante Quantitative Systems</span>
        </NavLink>
        <nav className="top-nav" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => (isActive ? "current" : "")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main className="shell page">{children}</main>

      <footer className="site-footer shell">
        <p>Gygante Quantitative Systems: Technical Architecture and Ecosystem Specification</p>
      </footer>
    </>
  );
}
