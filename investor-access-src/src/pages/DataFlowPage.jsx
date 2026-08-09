import DataFlowDiagram from "../components/DataFlowDiagram";

export default function DataFlowPage() {
  return (
    <>
      <section className="panel reveal">
        <p className="eyebrow">Lifecycle Sequence</p>
        <h1>End-to-End Functional Data Flow</h1>
        <p className="lead">
          This lifecycle sequence models the full system response when a global
          policy shock enters the platform.
        </p>
      </section>

      <section className="panel reveal">
        <div className="section-head">
          <p className="eyebrow">Flow Diagram</p>
          <h2>Shock to Execution Pathway</h2>
        </div>
        <DataFlowDiagram />
      </section>

      <section className="panel reveal">
        <div className="section-head">
          <p className="eyebrow">Data Artifacts</p>
          <h2>Payload Progression By Stage</h2>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Stage</th>
                <th>Primary Artifact</th>
                <th>Receiver</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Policy detection</td>
                <td>Shock metadata and event context</td>
                <td>Uroboros parser</td>
              </tr>
              <tr>
                <td>Forecast generation</td>
                <td>Forward macro projection vectors</td>
                <td>Shakya engine</td>
              </tr>
              <tr>
                <td>Cross-asset computation</td>
                <td>Risk matrices and correlation structures</td>
                <td>Aeon middleware</td>
              </tr>
              <tr>
                <td>Service distribution</td>
                <td>Standardized API signal stream</td>
                <td>Nexus Q and Pythagoras</td>
              </tr>
              <tr>
                <td>Execution dispatch</td>
                <td>Order instructions and hedging actions</td>
                <td>Brokers and execution venues</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
