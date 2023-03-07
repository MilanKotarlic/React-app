import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTES } from "./constants/router.constants";
import BaseLayout from "./layout/baseLayout";


// import AboutUs from "./pages/AboutUs";
import HomePage from "./pages/Home";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import { ROUTES } from "./constants/router.constants";
// import LandingPageLayout from "./layout/LandingPageLayout";
// import LoggedInUserLayout from "./layout/LoggedInUserLayout";
// import Dashboard from "./pages/Dashboard";

// import PrivateRoute from "./components/Routes/PrivateRoute";
// import Register from "./pages/Register";
// import PageNotFound from "./pages/PageNotFound";

export default function Router() {
	return (
		<Routes>
			<Route element={<BaseLayout />} >
				<Route
					path={ROUTES.HOME_PAGE.path}
					element={<HomePage />}
				/>
			</Route>
			{/* <Route
          path={ROUTES.ABOUT_PAGE.path}
          element={<PublicRoute component={AboutUs} />}
        />
        <Route
          path={ROUTES.CONTACT_PAGE.path}
          element={<PublicRoute component={ContactUs} />}
        />
        <Route
          path={ROUTES.LOGIN_PAGE.path}
          element={<PublicRoute component={Login} />}
        />
        <Route
          path={ROUTES.REGISTER_PAGE.path}
          element={<PublicRoute component={Register} />}
        />
     
      <Route element={<LoggedInUserLayout />}>
        <Route
          path={ROUTES.DASHBOARD_PAGE.path}
          element={<PrivateRoute component={Dashboard} />}
        />
      </Route>
      <Route path={ROUTES.PAGE_NOT_FOUND.path} element={<PageNotFound />} /> */}
		</Routes>
	);
}