const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const projectGenerator = require('./build/')

const provider = new HDWalletProvider(
    'perfect upgrade curious dream surround rack reason inspire kingdom famous fruit puppy',
    'https://rinkeby.infura.io/v3/cdc1d04901634213b13ff2c7f29bc313'
);

const web3 = new Web3(provider);


const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode})
        .send({ gas: '1000000', from: accounts[0] });

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();