import React from 'react';
import Layout from './Layout';

const Transaction = ({ txnsDetails }) => {
	return (
		<Layout>
			<h1 className='text-3xl'>Transaction Details</h1>
			<div className='rounded-md shadow-lg border border-gray-50  mt-5 grid grid-cols-1 divide-y p-5'>
				{txnsDetails.map((detail) => {
					return (
						<div className='grid grid-cols-1 divide-y p-5'>
							<p className='p-4 text-gray-300'>
								Block Number:
								<span className='ml-5 text-black'>{detail.blockNumber}</span>
							</p>
							<p className='p-4 text-gray-300'>
								From:<span className='ml-5 text-black'>{detail.from}</span>
							</p>
							<p className='p-4 text-gray-400'>
								To: <span className='ml-5 text-black'>{detail.to}</span>
							</p>
							{/* <p className='p-4 text-gray-400'>
								Value: <span className='ml-5 text-black'>{detail.value}</span>
							</p>
							<p className='p-4 text-gray-400'>
								Transaction Fee:{' '}
								<span className='ml-5 text-black'>
									{detail.transaction.fee}
								</span>
							</p> */}
							<p className='p-4 text-gray-400'>
								Transaction Hash:{' '}
								<span className='ml-5 text-black'>
									{detail.transactionHash}
								</span>
							</p>
							<p className='p-4 text-gray-400'>
								Status:
								{detail.status === 1 ? (
									<span className=' text-green-600 ml-5'>success</span>
								) : (
									<span className='text-red-600 ml-5'>failed</span>
								)}
							</p>
						</div>
					);
				})}
			</div>
		</Layout>
	);
};

export default Transaction;
