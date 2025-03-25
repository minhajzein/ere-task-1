import { Route, Routes } from 'react-router-dom'
import Routers from './routes/Routers'

function App() {
	return (
		<Routes>
			<Route path='/*' element={<Routers/>} />
		</Routes>
	)
}

export default App
