/**
 * ⚠️ ROUTING RULES:
 * - Router is in main.tsx. Do NOT add another <BrowserRouter> here or anywhere.
 * - Use <Routes> + <Route> components ONLY. Do NOT use useRoutes().
 * - STATIC IMPORTS ONLY — no React.lazy() or dynamic import().
 * - Import from 'react-router' — NOT 'react-router-dom' (does not exist).
 */
import { Routes, Route } from 'react-router';
import { SiteLayout } from '@/components/layout/SiteLayout';
import Index from '@/pages/Index';
import Solutions from '@/pages/Solutions';
import SolutionDetail from '@/pages/SolutionDetail';
import WhyAuditDesk from '@/pages/WhyAuditDesk';
import Teams from '@/pages/Teams';
import Compliance from '@/pages/Compliance';
import Platform from '@/pages/Platform';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Legal from '@/pages/Legal';
import NotFound from '@/pages/NotFound';

export default function App() {
	return (
		<Routes>
			<Route element={<SiteLayout />}>
				<Route path="/" element={<Index />} />
				<Route path="/solutions" element={<Solutions />} />
				<Route path="/solutions/:solutionId" element={<SolutionDetail />} />
				<Route path="/why-auditdesk" element={<WhyAuditDesk />} />
				<Route path="/teams" element={<Teams />} />
				<Route path="/compliance" element={<Compliance />} />
				<Route path="/platform" element={<Platform />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/privacy" element={<Legal kind="privacy" />} />
				<Route path="/terms" element={<Legal kind="terms" />} />
				<Route path="/security" element={<Legal kind="security" />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}
