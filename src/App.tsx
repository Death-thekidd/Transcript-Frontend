import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";
import Root from "./components/root/root";
import SignUp from "./components/signup/signup";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import UserProfile from "./components/user-profile/userProfile";
import Users from "./components/users/users";
import Home from "./components/home/home";
import Colleges from "./components/colleges/colleges";
import Departments from "./components/departments/departments";
import Destinations from "./components/destinations/destinations";
import TranscriptRequests from "./components/transcript-requests/transcriptRequests";
import RequestTranscript from "./components/request-transcript/requestTranscript";
import TranscriptTypes from "./components/transcript-types/transcriptTypes";
import RequestDestination from "./components/request-destination/requestDestination";
import Error_ from "./components/error/error";
import DestinationRequests from "./components/destination-requests/destinationRequests";
import AdminDashboard from "./components/admin-dashboard/adminDashboard";
import Roles from "./components/roles/roles";
import Dashboard from "./components/dashboard/dashboard";
import TranscriptCheckout from "./components/transcript-checkout/transcriptCheckout";
import ProtectedRoute from "./components/ProtectedRoute";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
	// useEffect(() => {
	// 	// Initialize your app here
	// 	// Call your initialization functions
	// }, []);
	// const scriptUrls = [
	// 	"/scripts/landing-page/js/jquery.js",
	// 	"/scripts/landing-page/js/vendors.min.js",
	// 	"/scripts/landing-page/revolution/js/jquery.themepunch.tools.min.js",
	// 	"/scripts/landing-page/revolution/js/jquery.themepunch.revolution.min.js",
	// ];
	// // Use the custom hook to add the scripts
	// useScripts(scriptUrls);
	return (
		<>
			<HelmetProvider>
				<Helmet>
					<script src="/scripts/jquery-3.1.1.min.js" defer />
					<script src="/scripts/bootstrap.bundle.min.js" defer />
					<script src="/scripts/popper.min.js" defer />
					<script src="/scripts/perfect-scrollbar.min.js" defer />
					<script src="/scripts/mousetrap.min.js" defer />
					<script src="/scripts/waves.min.js" defer />
					<script src="/scripts/apexcharts.min.js" defer />
					<script src="/scripts/app.js" defer />
					<script src="/scripts/landing-page/js/jquery.js" defer />
					<script src="/scripts/landing-page/js/vendors.min.js" defer />
					<script
						src="/scripts/landing-page/revolution/js/jquery.themepunch.tools.min.js"
						defer
					/>
					<script
						src="/scripts/landing-page/revolution/js/jquery.themepunch.revolution.min.js"
						defer
					/>
				</Helmet>
			</HelmetProvider>
			<ToastContainer />
			<Routes>
				<Route path="*" element={<Error_ />} />
				<Route path="/" element={<Home />}></Route>
				<Route path="/error" element={<Error_ />}></Route>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/signup" element={<SignUp />}></Route>
				<Route
					path="/app"
					element={
						<ProtectedRoute>
							<Root />
						</ProtectedRoute>
					}
				>
					<Route index element={<Dashboard />} />
					<Route path="admin-dashboard" element={<AdminDashboard />} />
					<Route path="user-profile" element={<UserProfile />} />
					<Route path="users" element={<Users />} />
					<Route path="colleges" element={<Colleges />} />
					<Route path="departments" element={<Departments />} />
					<Route path="destinations" element={<Destinations />} />
					<Route path="destination-requests" element={<DestinationRequests />} />
					<Route path="transcript-requests" element={<TranscriptRequests />} />
					<Route path="transcript-types" element={<TranscriptTypes />} />
					<Route path="roles" element={<Roles />} />
					<Route path="request-transcript" element={<RequestTranscript />} />
					<Route path="transcript-checkout/:id" element={<TranscriptCheckout />} />
					<Route path="request-destination" element={<RequestDestination />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
