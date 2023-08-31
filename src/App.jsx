import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import NotFound from "./pages/NotFound";
import Home from "./pages/home";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="*" element={<NotFound />} />

				<Route path="/" element={<Home />} />
			</Routes>
			{/* <Route path="*" element={<NotFound />} /> */}
		</Router>
	);
}

export default App;
