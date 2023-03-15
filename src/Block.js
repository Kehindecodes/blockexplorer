import React from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';

const Block = ({ latestBlock }) => {
	return (
		<Layout>
			<div className='content'>
				<h1 className='text-4xl'>latest Blocks</h1>
				<div className='lastest  rounded-md shadow-lg border border-gray-50  mt-5 grid grid-cols-1 divide-y'>
					{latestBlock.map((block, index) => {
						return (
							<div className='p-5 flex text-blue-400' key={index}>
								<p>
									{block.number} <br />
								</p>
								<Link to='/transactions' className='ml-14 hover:underline'>
									hash: {block.hash}
								</Link>
								<p className='ml-14'>
									{' '}
									number of txns:{block.transactions.length}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</Layout>
	);
};
export default Block;
