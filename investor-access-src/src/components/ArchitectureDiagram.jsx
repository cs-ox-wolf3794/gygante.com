export default function ArchitectureDiagram() {
  return (
    <div className="svg-wrap" role="img" aria-label="Gygante four-layer architecture diagram">
      <svg viewBox="0 0 1200 880" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="layerFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f6fbf8" />
            <stop offset="100%" stopColor="#e8f1ec" />
          </linearGradient>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#0a5355" />
          </marker>
        </defs>

        <rect x="24" y="24" width="1152" height="150" rx="14" fill="url(#layerFill)" stroke="#88a9a4" />
        <text x="46" y="54" className="svg-title">1. Surface, User Interface and Automation Layer</text>
        <text x="48" y="84" className="svg-sub">Enterprise / Institutional Portal: Nexus Q</text>
        <text x="48" y="108" className="svg-body">Nexus Signals | Nexus Models | Nexus Scenario | Nexus Portfolio | Nexus Agent</text>
        <text x="48" y="134" className="svg-sub">Retail / Active Niche Portal: Pythagoras</text>
        <text x="48" y="158" className="svg-body">Institutional Signals | Decision Tree | Pole Vaultor</text>

        <line x1="600" y1="174" x2="600" y2="214" stroke="#0a5355" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="622" y="198" className="svg-note">API requests / triggers / strategy logic</text>

        <rect x="24" y="218" width="1152" height="134" rx="14" fill="url(#layerFill)" stroke="#88a9a4" />
        <text x="46" y="250" className="svg-title">2. Orchestration and Services Layer (Aeon Platforms)</text>
        <text x="48" y="279" className="svg-body">Monad: Microservices orchestration and non-blocking API routing</text>
        <text x="48" y="304" className="svg-body">Pleroma: Secure transactional data, permissions, billing, parameter transfer</text>
        <text x="48" y="329" className="svg-body">Platon: High-availability enterprise infrastructure and uptime framework</text>

        <line x1="600" y1="352" x2="600" y2="392" stroke="#0a5355" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="622" y="376" className="svg-note">Continuous query pipeline</text>

        <rect x="24" y="396" width="1152" height="180" rx="14" fill="url(#layerFill)" stroke="#88a9a4" />
        <text x="46" y="427" className="svg-title">3. Engine and Ecosystem Layer</text>
        <text x="48" y="455" className="svg-body">Brahma Ecosystem and Shakya Engine: Operational execution core</text>
        <text x="48" y="480" className="svg-body">Adi Library: Foundational mathematical and algorithmic codebase</text>
        <text x="48" y="507" className="svg-sub">Integrated Asset Modules</text>
        <text x="48" y="531" className="svg-body">Ahami: Commodities and energy modeling</text>
        <text x="48" y="555" className="svg-body">Maha: Equity risk matrices</text>
        <text x="410" y="555" className="svg-body">Basu: FX and fixed-income analytics</text>

        <line x1="600" y1="576" x2="600" y2="616" stroke="#0a5355" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="622" y="602" className="svg-note">Normalized predictive vectors / historical queries</text>

        <rect x="24" y="620" width="1152" height="144" rx="14" fill="url(#layerFill)" stroke="#88a9a4" />
        <text x="46" y="651" className="svg-title">4. Persistence and Simulation Engine Layer</text>
        <text x="48" y="680" className="svg-body">Uroboros Timeseries Database: Multi-industry historical data lake</text>
        <text x="48" y="705" className="svg-body">Yaldabaoth Forecast Model: Non-linear macro and policy simulation engine</text>

        <line x1="560" y1="764" x2="560" y2="804" stroke="#b45c1a" strokeWidth="2" markerEnd="url(#arrow)" />
        <line x1="640" y1="804" x2="640" y2="764" stroke="#0a5355" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="666" y="786" className="svg-note">Bottom-up data and top-down execution loop</text>
      </svg>
    </div>
  );
}
