import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Users from '../components/users/Users'

function Routers() {
	return (
		<Routes>
			<Route element={<Outlet />}>
				<Route path='/' element={<Users/>} />
			</Route>
		</Routes>
	)
}

export default Routers
