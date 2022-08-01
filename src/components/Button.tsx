import React from 'react'

interface IButtonProps {
	children: string
}

export default function Button({ children }: IButtonProps) {
	return (
		<button  className='border p-2 m-2 '></button>
	)
}
