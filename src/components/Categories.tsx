import React from 'react';
import { useProducts } from '../hooks/products';
import Button from './Button';

export default function Categories() {
	const { type, setType } = useProducts();
	return (
		<div className='flex justify-between'>
			<button onClick={() => setType('')} className='border p-2 mb-2'>All Categories</button>
			<button onClick={() => setType('/category/electronics')} className='border p-2 mb-2'>Electronics</button>
			<button onClick={() => setType('/category/jewelery')} className='border p-2 mb-2'>Jewelery</button>
			<button onClick={() => setType("/category/men's clothing")} className='border p-2 mb-2'>Men's clothing</button>
			<button onClick={() => setType("/category/women's clothing")} className='border p-2 mb-2'>Women's clothing</button>
		</div>
	)
}
