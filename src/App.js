import { Alchemy, Network } from 'alchemy-sdk';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Transactions from './Transactions';
import Transaction from './Transaction';
import Block from './Block';

// Refer to the README doc for more information about using API
// keys in client-side code. You should never do this in production
// level code.
const settings = {
	apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
	network: Network.ETH_MAINNET,
};

// In this week's lessons we used ethers.js. Here we are using the
// Alchemy SDK is an umbrella library with several different packages.
//

const alchemy = new Alchemy(settings);
// You can read more about the packages here:
//   https://docs.alchemy.com/reference/alchemy-sdk-api-surface-overview#api-surface

function App() {
	// const [blockNumber, setBlockNumber] = useState();
	const [latestBlock, setLatestBlock] = useState([]);
	const [txnDetails, setTxnDetails] = useState([]);

	async function getBlocks() {
		const block = await alchemy.core.getBlockNumber();
		const blockPromises = [];
		// const numBlocks = Math.min(block, 10);
		// console.log(numBlocks);
		for (let i = block; i > block - 10; i--) {
			// const blockNumbers = block - i;
			// const blocks = getBlock(blockNumbers);
			const newBlock = alchemy.core.getBlock(i);
			blockPromises.push(newBlock);
			// setLatestBlock((prevBlock) => [...prevBlock, newBlock]);
			// console.log(block);
		}
		const latestBlocks = await Promise.all(blockPromises);
		setLatestBlock(latestBlocks);
		console.log(latestBlocks);
	}
	async function getABlock() {
		const newestBlock = await alchemy.core.getBlock();

		setLatestBlock((prevBlock) => [...prevBlock, newestBlock]);
		// setLatestBlock(newestBlock);
		console.log(newestBlock);
	}
	async function getTransaction(txnHash) {
		const transaction = await alchemy.core.getTransactionReceipt(txnHash);
		setTxnDetails((prevTxn) => [...prevTxn, transaction]);
		console.log(transaction);
	}

	useEffect(() => {
		// getBlocks();
		getABlock();
	}, []);
	// const getdate = (timestamp) => {
	// 	const date = new Date(timestamp);
	// 	return date.getMinutes();
	// };
	// console.log(getdate(1678718867));

	return (
		<BrowserRouter>
			<Route exact path='/'>
				<Block latestBlock={latestBlock} />
			</Route>
			<Route path='/transactions'>
				<Transactions
					latestBlock={latestBlock}
					getTransaction={getTransaction}
				/>
			</Route>
			<Route path='/transaction'>
				<Transaction txnsDetails={txnDetails} />
			</Route>
		</BrowserRouter>
	);
}

export default App;
