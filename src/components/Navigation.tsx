import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
	return (
		<nav className='h-[50px] fixed w-full flex justify-between px-5 bg-gray-500 items-center text-white'>
			<span className='font-bold'>React 2022</span>
			
			<span>
				<Link to='/' className='mr-4'>Products</Link>
				<Link to='/about'>About</Link>
			</span>
		</nav>
	)
}
