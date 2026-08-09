export default function SummaryPage() {
  return (
    <>
      <section className="panel reveal">
        <p className="eyebrow">Executive Summary</p>
        <h1>Institutional-Grade Quantitative Systems Intelligence</h1>
        <p className="lead">
          Gygante Quantitative Systems ingests unstructured macroeconomic data,
          corporate policies, and energy market shocks, then transforms those
          datasets into predictive cross-asset market signals for institutional
          decision-making.
        </p>
        <div className="chip-row" aria-label="Coverage domains">
          <span className="chip">Global Equities</span>
          <span className="chip">Foreign Exchange</span>
          <span className="chip">Fixed Income</span>
          <span className="chip">Corporate Balance Sheets</span>
        </div>
      </section>

      <section className="panel reveal">
        <div className="section-head">
          <p className="eyebrow">Core Function</p>
          <h2>Signal Generation Pipeline</h2>
        </div>
        <div className="grid two">
          <article className="tile">
            <h3>Inputs</h3>
            <ul>
              <li>Carbon pricing updates</li>
              <li>Supply-chain bottlenecks</li>
              <li>Regulatory and policy shifts</li>
              <li>Macroeconomic and market regime transitions</li>
            </ul>
          </article>
          <article className="tile">
            <h3>Outputs</h3>
            <ul>
              <li>Predictive macro and scenario signals</li>
              <li>Cross-asset risk propagation structures</li>
              <li>Latent exposure detection alerts</li>
              <li>Execution-ready strategy triggers</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="panel reveal">
        <div className="section-head">
          <p className="eyebrow">Specification Scope</p>
          <h2>Platform Definition</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Domain</th>
                <th>Concrete Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Surface Layer</td>
                <td>Nexus Q and Pythagoras user interfaces, signals, and automation controls.</td>
              </tr>
              <tr>
                <td>Orchestration Layer</td>
                <td>Aeon middleware (Monad, Pleroma, Platon) for routing, security, and uptime.</td>
              </tr>
              <tr>
                <td>Engine Layer</td>
                <td>Shakya execution core, Adi library, and Ahami/Maha/Basu asset modules.</td>
              </tr>
              <tr>
                <td>Persistence Layer</td>
                <td>Uroboros historical data lake and Yaldabaoth non-linear forecast simulation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
