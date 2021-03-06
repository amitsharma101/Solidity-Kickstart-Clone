require('dotenv').config();

const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./contract_build/CampaignFactory.json");

const provider = new HDWalletProvider(
    process.env.MNEMONIC,
    'https://ropsten.infura.io/v3/fae9340d61014a1e931fc8096103fc92'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);
    
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x'+compiledFactory.bytecode })
        .send({ gas: "5000000", from: accounts[0] });
    console.log("Contract deployed to", result.options.address);
};

deploy();