import React, {useContext} from 'react';
import { Product } from "../components/Product";
import { useProducts } from "../hooks/products";
import IProduct from "../models";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import Modal from "../components/Modal";
import CreateProduct from "../components/CreateProduct"
import { ModalContext } from '../context/ModalContext';
import Categories from '../components/Categories';
import Button from '../components/Button';

export default function ProductsPage() {
	const { products, error, loader, addProduct, type, setType } = useProducts();
	const {modal, openModal, closeModal} = useContext(ModalContext)
	function createHandler(product: IProduct) {
		closeModal()
		addProduct(product)
	}
	return (
		<div className="container mx-auto max-w-2xl pt-20 ">
			{ loader && <Loader/> }
			{ error && <ErrorMessage error={ error } /> }
			{/* <Categories /> */}
			<div className='flex justify-between'>
				<button onClick={() => setType('')} className='border p-2 mb-2'>All Categories</button>
				<button onClick={() => setType('/category/electronics')} className='border p-2 mb-2'>Electronics</button>
				<button onClick={() => setType('/category/jewelery')} className='border p-2 mb-2'>Jewelery</button>
				<button onClick={() => setType("/category/men's clothing")} className='border p-2 mb-2'>Men's clothing</button>
				<button onClick={() => setType("/category/women's clothing")} className='border p-2 mb-2'>Women's clothing</button>
				
			</div>
			{ products.map(product => (
			<Product product={product} key={product.id} />)
			) }
			{modal && <Modal title='Create new product' onClose={closeModal}>
			<CreateProduct onCreate={createHandler} />
			</Modal>}
			<button onClick={openModal} className='fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl pt-1 pb-2 px-4 '>+</button>
		</div>
	);
}
