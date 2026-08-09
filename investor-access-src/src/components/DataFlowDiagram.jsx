export default function DataFlowDiagram() {
  return (
    <div className="svg-wrap" role="img" aria-label="End-to-end market shock data flow diagram">
      <svg viewBox="0 0 1200 980" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f8fcfa" />
            <stop offset="100%" stopColor="#e7f0eb" />
          </linearGradient>
          <marker id="flowArrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
            <path d="M0,0 L0,6 L7,3 z" fill="#0a5355" />
          </marker>
        </defs>

        <text x="510" y="38" className="svg-title">Global Policy Shock</text>
        <line x1="600" y1="48" x2="600" y2="84" stroke="#0a5355" strokeWidth="2" markerEnd="url(#flowArrow)" />

        <rect x="70" y="90" width="1060" height="122" rx="12" fill="url(#flowFill)" stroke="#8caeaa" />
        <text x="92" y="120" className="svg-title">Layer 4: Uroboros DB and Yaldabaoth Forecast Model</text>
        <text x="94" y="148" className="svg-body">Uroboros parses historical event structures and macro context.</text>
        <text x="94" y="172" className="svg-body">Yaldabaoth generates forward non-linear macroeconomic projections.</text>

        <line x1="600" y1="212" x2="600" y2="252" stroke="#0a5355" strokeWidth="2" markerEnd="url(#flowArrow)" />
        <text x="620" y="238" className="svg-note">Raw data vectors</text>

        <rect x="70" y="258" width="1060" height="136" rx="12" fill="url(#flowFill)" stroke="#8caeaa" />
        <text x="92" y="289" className="svg-title">Layer 3: Shakya Engine and Adi Library</text>
        <text x="94" y="316" className="svg-body">Shakya receives vectors and executes parallel asset simulations.</text>
        <text x="94" y="340" className="svg-body">Ahami (Energy) {"->"} Maha (Equities) {"->"} Basu (FX and Bonds)</text>
        <text x="94" y="364" className="svg-body">Outputs computed risk frameworks and correlation matrices.</text>

        <line x1="600" y1="394" x2="600" y2="434" stroke="#0a5355" strokeWidth="2" markerEnd="url(#flowArrow)" />
        <text x="620" y="418" className="svg-note">Computed risk frameworks</text>

        <rect x="70" y="440" width="1060" height="108" rx="12" fill="url(#flowFill)" stroke="#8caeaa" />
        <text x="92" y="470" className="svg-title">Layer 2: Aeon Platforms (Monad / Pleroma / Platon)</text>
        <text x="94" y="496" className="svg-body">Monad streams matrices via secure middleware for active platform instances.</text>
        <text x="94" y="520" className="svg-body">Pleroma and Platon enforce transactional integrity and availability.</text>

        <line x1="600" y1="548" x2="600" y2="588" stroke="#0a5355" strokeWidth="2" markerEnd="url(#flowArrow)" />
        <text x="620" y="574" className="svg-note">Standardized API stream</text>

        <rect x="70" y="594" width="1060" height="122" rx="12" fill="url(#flowFill)" stroke="#8caeaa" />
        <text x="92" y="624" className="svg-title">Layer 1: Dual Surface Render</text>
        <text x="94" y="650" className="svg-body">Nexus Q alerts enterprise desks through Nexus Signals.</text>
        <text x="94" y="674" className="svg-body">Pythagoras mirrors institutional signals to active niche users.</text>

        <line x1="420" y1="716" x2="420" y2="760" stroke="#0a5355" strokeWidth="2" markerEnd="url(#flowArrow)" />
        <line x1="780" y1="716" x2="780" y2="760" stroke="#c35f18" strokeWidth="2" markerEnd="url(#flowArrow)" />

        <rect x="70" y="766" width="500" height="162" rx="12" fill="#f6fbf8" stroke="#8caeaa" />
        <text x="92" y="796" className="svg-title">Enterprise Path</text>
        <text x="94" y="823" className="svg-body">Nexus Agent intercepts warning and validates hedge rules.</text>
        <text x="94" y="847" className="svg-body">Automated portfolio short hedge is dispatched to brokers.</text>

        <rect x="630" y="766" width="500" height="162" rx="12" fill="#fff6ef" stroke="#d0996f" />
        <text x="652" y="796" className="svg-title">Retail Path</text>
        <text x="654" y="823" className="svg-body">Decision Tree validates incoming signal conditions.</text>
        <text x="654" y="847" className="svg-body">Pole Vaultor executes manual or automated portfolio orders.</text>
      </svg>
    </div>
  );
}
