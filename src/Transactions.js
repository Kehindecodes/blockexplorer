import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from './Layout';

const Transactions = ({ latestBlock, getTransaction }) => {
	console.log(latestBlock.map((block) => block.transactions));
	const history = useHistory();
	const sendTxnHash = (e) => {
		e.preventDefault();
		const hash = e.target.textContent;

		history.push('/transaction'); // navigate to the /transaction route
		getTransaction(hash);

		console.log(hash);
	};
	return (
		<Layout>
			<h1 className='text-4xl'>
				{' '}
				List of Transactions(
				{latestBlock.map((block) => block.transactions.length)}){' '}
			</h1>
			<div className='rounded-md shadow-lg border border-gray-50  mt-5 grid grid-cols-1 divide-y p-5'>
				{latestBlock.map((block) => {
					return block.transactions.map((transaction, index) => {
						return (
							<ul key={index}>
								<li className='p-3 text-blue-300'>
									<Link
										to='/transaction'
										className='hover:underline'
										onClick={sendTxnHash}>
										{transaction}
									</Link>
								</li>
							</ul>
						);
					});
				})}
			</div>
		</Layout>
	);
};

export default Transactions;
