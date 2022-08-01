import React, {useState} from 'react'
import IProduct from '../models';

interface ProductProps {
	product: IProduct
}

export function Product({ product }: ProductProps) {
	const [details, setDetails] = useState(false);
	return (
		<div className='border py-2 px-4 ruonded flex flex-col items-center mb-10'>
			<h1>{product.title}</h1>
			<img className='w-1/4 mb-5 mt-5' src={product.image} alt={product.title}/>
			{details &&  <p className='m-5 '>{product.description}</p>}
			<div className='flex gap-20'>
				<p>Price: <span className='font-bold'>{product.price}$</span></p>
				<p>Rate: <span style={{fontWeight: 'bold'}}>{ product?.rating?.rate }</span></p>
			</div>
			<button 
			// onClick={() => details ? setDetails(false) : setDetails(true)} 
			onClick={() => setDetails(prev => !prev)} 
			className={`py-2 outline:none px-4 border m-5 ${details ? 'bg-blue-400' : 'bg-yellow-400'}`}
			>{details ? 'Hide Description' : 'Show Description'}
			</button>
		</div>
		
	)
}