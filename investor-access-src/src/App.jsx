import { Navigate, Route, Routes } from "react-router-dom";
import AccessGate from "./components/AccessGate";
import Layout from "./components/Layout";
import SummaryPage from "./pages/SummaryPage";
import ArchitecturePage from "./pages/ArchitecturePage";
import DataFlowPage from "./pages/DataFlowPage";
import MonetizationPage from "./pages/MonetizationPage";
import GlossaryPage from "./pages/GlossaryPage";

export default function App() {
  return (
    <AccessGate>
      <Layout>
        <Routes>
          <Route path="/" element={<SummaryPage />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/data-flow" element={<DataFlowPage />} />
          <Route path="/monetization" element={<MonetizationPage />} />
          <Route path="/glossary" element={<GlossaryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </AccessGate>
  );
}
