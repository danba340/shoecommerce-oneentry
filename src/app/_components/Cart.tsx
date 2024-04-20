"use client"
import { useLocalStorage } from 'usehooks-ts'
import { ProductItem } from './ProductItem';
import { useState } from 'react';
import { Menu, MenuItem } from './Menu';
import { Product } from '../_oneentry';

export function CartIcon({ count }: { count: number }) {
	return (
		<div className="relative hover:opacity-75 hover:-translate-y-0.5 transition">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
			<div className="absolute top-0 left-[-15px] w-3 h-3 rounded-full bg-black text-white">{count > 0 ? count : ""}</div>
		</div>
	)
}

export function Cart() {
	const [cart, saveCart] = useLocalStorage<Product[]>("cart", [], { initializeWithValue: false });
	const [active, setActive] = useState<string>("");

	const total = cart.reduce((acc: number, p: Product) => {
		return acc + parseFloat(p.attributeValues.price.value)
	}, 0)

	return (
		<div className="absolute top-[-110px] right-0 p-6">
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} align='right' active={active} itemKey={"Pages"} item={CartIcon({ count: cart.length })}>
					{cart.map((p, i) => {
						return (
							<div
								key={`${p.id}${i}`}
								className='flex justify-between gap-8 py-1 px-2'>
								<ProductItem
									// @ts-ignore
									product={p as Product}
									showBuy={false}
								/>
								<button className='text-xl' style={{ fontFamily: "monospace" }} onClick={() => {
									saveCart(prev => {
										return prev.filter((_, _i) => i != _i)
									})
								}}>x</button>
							</div>
						)
					})}
					<div className='text-right'>
						Total: ${total.toFixed(2)}
					</div>
				</MenuItem >
			</Menu>
		</div>
	)
}