import DemiGod from "./pages/DemiGod";
import { Routes, Route, Navigate } from "react-router-dom";
import Battle from "./pages/Battle";
import Base from "./pages/Base";
import { routeConstants } from "./utils/route.constants";

const AppRoutes = () => (
	<Routes>
		<Route path={`/${routeConstants.DEMI_GOD}`} element={<DemiGod />} />
		<Route path={`/${routeConstants.BATTLE}`} element={<Battle />} />
		<Route path={`/${routeConstants.BASE}`} element={<Base />} />
		<Route path="/" element={<Navigate to={`/${routeConstants.DEMI_GOD}`} replace />} />
	</Routes>
);

export default AppRoutes;
