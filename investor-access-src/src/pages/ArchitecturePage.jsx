import ArchitectureDiagram from "../components/ArchitectureDiagram";

export default function ArchitecturePage() {
  return (
    <>
      <section className="panel reveal">
        <p className="eyebrow">System Blueprint</p>
        <h1>End-to-End System Architecture</h1>
        <p className="lead">
          The platform is implemented as a unified four-layer stack. Data flows
          from ingestion and simulation upward to user surfaces. Execution
          commands and strategy queries flow downward from surface products.
        </p>
      </section>

      <section className="panel reveal">
        <div className="section-head">
          <p className="eyebrow">Architecture Diagram</p>
          <h2>Concrete Layer Topology</h2>
        </div>
        <ArchitectureDiagram />
      </section>

      <section className="panel reveal">
        <div className="section-head">
          <p className="eyebrow">Interoperability Matrix</p>
          <h2>Component-to-Component Contract Surface</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Source</th>
                <th>Destination</th>
                <th>Interface</th>
                <th>Transferred Artifact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Layer 1 Surfaces</td>
                <td>Aeon Monad</td>
                <td>API requests and triggers</td>
                <td>Strategy rules and logic-tree payloads</td>
              </tr>
              <tr>
                <td>Aeon Monad and Pleroma</td>
                <td>Shakya Engine</td>
                <td>Continuous query pipeline</td>
                <td>Execution parameters and scoped datasets</td>
              </tr>
              <tr>
                <td>Shakya + Adi + Asset Modules</td>
                <td>Aeon Platforms</td>
                <td>Normalized response streams</td>
                <td>Predictive vectors and risk matrices</td>
              </tr>
              <tr>
                <td>Uroboros + Yaldabaoth</td>
                <td>Shakya Engine</td>
                <td>Historical and simulated vectors</td>
                <td>Macro projections and scenario trajectories</td>
              </tr>
              <tr>
                <td>Nexus Agent or Pole Vaultor</td>
                <td>Execution Brokers</td>
                <td>Automated execution channel</td>
                <td>Hedge instructions and strategy orders</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
