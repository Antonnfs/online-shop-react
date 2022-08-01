import axios from 'axios';
import React, {useState} from 'react'
import IProduct from "../models";
import { ErrorMessage } from './ErrorMessage';

const productData: IProduct =  {
	title: 'test product',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 10,
		count: 3
	}
}

interface CreateProductProps {
	onCreate: (product: IProduct) => void  
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
	const [title, setTitle] = useState('')
	const [price, setPrice] = useState(0)
	const [error, setError] = useState('')
	async function submitHandler(event: React.FormEvent) {
		event.preventDefault() 
		setError('')
		if (title.trim().length === 0 || !price) {
			setError('Please enter valid values')
			return
		}
		productData.title = title;
		productData.price = price;

		const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData) 
		onCreate(response.data );
	}
	
	function changeHandlerTitle(event: React.KeyboardEvent<HTMLInputElement>) {
		setTitle(event.target.value)
	}
	function changeHandlerPrice(event: React.KeyboardEvent<HTMLInputElement>) {
		setPrice(+event.target.value)
	}
	return (
		<form
			onSubmit={submitHandler}
		>
			<input
				type='text'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='Enter product title...'
				value={title}
				onChange={changeHandlerTitle}
			/>
			<input
				type='number'
				className='border py-2 px-4 mb-2 w-full outline-0'
				placeholder='Enter product price...'
				value={price}
				onChange={changeHandlerPrice}
			/>
			{error && <ErrorMessage error={error}/>}
			<button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white'>Create </button>
		</form>
	)
}
