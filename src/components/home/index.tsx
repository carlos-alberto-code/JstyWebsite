import React from 'react'

interface HomeProps {
	title?: string
	username?: string
}
const Home: React.FC<HomeProps> = ({
	title,
	username
}: HomeProps) => {
	return (
		<div>
			<h1>{title || 'Welcome to the Home Page'}</h1>
			{username && <p>Hello, {username}!</p>}
			<p>This is a simple React component with TypeScript.</p>
		</div>
	)
}

export default Home
