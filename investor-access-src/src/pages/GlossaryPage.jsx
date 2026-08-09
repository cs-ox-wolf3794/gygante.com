const glossary = [
  {
    term: "Nexus Q",
    definition: "Institutional portal containing signal, modeling, scenario, portfolio, and agent products.",
  },
  {
    term: "Pythagoras",
    definition: "Retail and active-niche portal delivering institutional signals, Decision Tree, and Pole Vaultor.",
  },
  {
    term: "Monad",
    definition: "Aeon microservices orchestrator for non-blocking API routing and load balancing.",
  },
  {
    term: "Pleroma",
    definition: "Aeon transactional layer managing secure data storage, permissions, and billing verification.",
  },
  {
    term: "Platon",
    definition: "Aeon infrastructure framework for high-availability, enterprise-grade uptime.",
  },
  {
    term: "Shakya Engine",
    definition: "Primary operational compute core executing cross-asset simulations in parallel.",
  },
  {
    term: "Adi Library",
    definition: "Foundational mathematical and algorithmic library used by Shakya and module engines.",
  },
  {
    term: "Ahami",
    definition: "Asset module for commodities pricing and energy-focused modeling.",
  },
  {
    term: "Maha",
    definition: "Asset module for equity-risk matrix computation.",
  },
  {
    term: "Basu",
    definition: "Asset module for FX and fixed-income analytics.",
  },
  {
    term: "Uroboros Timeseries DB",
    definition: "High-throughput multi-industry historical data lake and persistence layer.",
  },
  {
    term: "Yaldabaoth Forecast Model",
    definition: "Non-linear macro-policy simulation model that projects forward asset trajectories.",
  },
  {
    term: "MaaS",
    definition: "Model-as-a-Service delivery model used by Nexus Models.",
  },
  {
    term: "SaaS",
    definition: "Software-as-a-Service delivery model used by Nexus Scenario.",
  },
  {
    term: "TaaS",
    definition: "Tool-as-a-Service delivery model used by Nexus Portfolio.",
  },
  {
    term: "AaaS",
    definition: "Agent-as-a-Service execution model used by Nexus Agent and Pole Vaultor.",
  },
];

export default function GlossaryPage() {
  return (
    <>
      <section className="panel reveal">
        <p className="eyebrow">Specification Glossary</p>
        <h1>Concrete Definitions For Every Named Platform Element</h1>
        <p className="lead">
          This glossary removes ambiguity by mapping each platform term,
          acronym, and module name to a single operational definition.
        </p>
      </section>

      <section className="panel reveal">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Term</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              {glossary.map((item) => (
                <tr key={item.term}>
                  <td>{item.term}</td>
                  <td>{item.definition}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
