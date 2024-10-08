import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CustomerPage from "./pages/CustomerPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/customers" element={<CustomerPage />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
