import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined')
{
    web3 = new Web3(window.web3.currentProvider);
}
else {
    // We are on the server *OR* the user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/cdc1d04901634213b13ff2c7f29bc313'
    );
    web3 = new Web3(provider);
}

export default web3;
