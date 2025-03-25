import { useGetAllUsersQuery } from '../../redux/apiSlices/usersApiSlice'
import Loading from '../loading/Loading'
import { Table } from 'antd'
import usersColumns from './UsersColumns'
import { useEffect, useState } from 'react'

function Users() {
	const {
		data: users,
		isLoading,
		isSuccess,
		isError,
		error,
	} = useGetAllUsersQuery()
	const [search, setSearch] = useState('')
	const [filtered, setFiltered] = useState(users || [])

	const handleSearch = () => {
		const filteredData = users.filter(
			x =>
				x.name.toLowerCase().includes(search.toLowerCase()) ||
				x.email.toLowerCase().includes(search.toLowerCase()) ||
				x.company.name.toLowerCase().includes(search.toLowerCase())
		)
		setFiltered(filteredData)
	}

	useEffect(() => {
		if (search === '') setFiltered(users)
		else {
			handleSearch()
		}
	}, [search, isSuccess])

	return isLoading ? (
		<Loading />
	) : isError ? (
		<h1>{error.data.message}</h1>
	) : (
		<div className='w-full min-h-dvh bg-gray-500 flex flex-col gap-2 p-10'>
			<input
				type='search'
				className='bg-white rounded-lg p-2 outline-none'
				value={search}
				onChange={e => setSearch(e.target.value)}
			/>
			<Table
				dataSource={filtered}
				pagination={{ pageSize: 5 }}
				columns={usersColumns()}
			/>
		</div>
	)
}

export default Users
