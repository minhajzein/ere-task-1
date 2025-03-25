const usersColumns = () => [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		sorter: (a, b) => a.name.length - b.name.length,
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email',
		sorter: (a, b) => a.email.length - b.email.length,
	},
	{
		title: 'Phone',
		dataIndex: 'phone',
		key: 'phone',
		sorter: (a, b) => a.phone.length - b.phone.length,
	},
	{
		title: 'Company Name',
		dataIndex: 'company',
		key: 'companyName',
		render: (_, record) => <h1>{record.company.name}</h1>,
	},
	{
		title: 'Address',
		key: 'address',
		render: (_, record) => (
			<h1>
				{record.address.city}, {record.address.street}
			</h1>
		),
	},
]

export default usersColumns
