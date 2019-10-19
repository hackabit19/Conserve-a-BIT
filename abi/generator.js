var web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

const provider = new HDWalletProvider(
	'perfect upgrade curious dream surround rack reason inspire kingdom famous fruit puppy',
	'	https://rinkeby.infura.io/v3/cdc1d04901634213b13ff2c7f29bc313'
);
const web3js = new web3(provider);
const address = "0xeA1E25d657802eb5Bfe0E81AD94D8D1B0B512ABf";
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "projectGoal",
				"type": "uint256"
			}
		],
		"name": "createProject",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "AllProjects",
		"outputs": [
			{
				"internalType": "contract Project[]",
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Projects",
		"outputs": [
			{
				"internalType": "contract Project",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var instance = new web3js.eth.Contract(abi, address);
//console.log(web3js.eth.getAccounts());
module.exports = instance;