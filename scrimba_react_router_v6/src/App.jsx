import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import './meyer.css';
import './index.css';
import './../server.js';

import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Reviews from './pages/Host/Reviews';
import Income from './pages/Host/Income';
import HostLayout from './components/HostLayout';
import Dashboard from './pages/Host/Dashboard';
import HostVanDetail, { loader as loaderHostDetail } from './pages/Host/HostVanDetail';
import ListedVans, { loader as loaderListedVans } from './pages/Host/ListedVans';
import HostDetailPricing from './components/HostDetailPricing';
import HostDetailPhotos from './components/HostDetailPhotos';
import HostDetailInfo from './components/HostDetailInfo';
import NotFound from './pages/NotFound';
import Error from './components/Error';
import Login, { loginLoader, action } from './pages/Login';

import { requireAuth } from './utils.js';

import './../server';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
			errorElement={<Error />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="about"
				element={<About />}
			/>
			<Route
				path="login"
				element={<Login />}
				loader={loginLoader}
				action={action}
			/>
			<Route
				path="vans"
				element={<Vans />}
				loader={vansLoader}
			/>
			<Route
				path="vans/:id"
				element={<VanDetail />}
				loader={vanDetailLoader}
			/>
			<Route
				path="host"
				element={<HostLayout />}
				loader={async () => await requireAuth()}
			>
				<Route
					index
					element={<Dashboard />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path="income"
					element={<Income />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path="reviews"
					element={<Reviews />}
					loader={async () => await requireAuth()}
				/>
				<Route
					path="vans"
					element={<ListedVans />}
					loader={loaderListedVans}
				/>
				<Route
					path="vans/:id"
					element={<HostVanDetail />}
					loader={loaderHostDetail}
				>
					<Route
						index
						element={<HostDetailInfo />}
					/>
					<Route
						path="pricing"
						element={<HostDetailPricing />}
					/>
					<Route
						path="photos"
						element={<HostDetailPhotos />}
					/>
				</Route>
			</Route>
			<Route
				path="*"
				element={<NotFound />}
			/>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
