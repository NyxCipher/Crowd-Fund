const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
	'{Key}',
	'https://rinkeby.infura.io/v3/{ID}'
	//Contract deployed to 0xafCF0F7B09fB9883bEC5D4b884D0557BFcCF6EA5
);
const web3 = new Web3(provider);
const deploy = async () => {
	//const accounts = await web3.eth.getAcounts();
	const accounts = await web3.eth.getAccounts().catch((e) => { console.log(e); });

	console.log('Attemptig to deploy from account', accounts[0]);
	//const result = await new web3.eth.Contract(JSON.parse(interface))
	//	.deploy({data: bytecode, arguements: ['Hi There']})
	//	.send({ gas: '1000000', from: accounts[0]});
	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
   	 .deploy({ data: compiledFactory.bytecode })
   	 .send({ gas: '1000000', from: accounts[0] });
	//1const result = await new web3.eth.Contract(JSON.parse(interface))
    //1	.deploy({data: '0x' + bytecode}) // add 0x bytecode
    //1	.send({ gas: '1000000', from: accounts[0]}) // remove 'gas'
	//const result = await new web3.eth.Contract(JSON.parse(interface))
    //    .deploy({data: bytecode, arguments: ['Hi There!']})
    //    .send({'from': accounts[0], 'gas': '1000000'}).catch((e) => { console.log(e); });

	console.log('Contract deployed to', result.options.address);
};
deploy();

//const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({data: '0x' + bytecode, arguments: ['Hi there!']}) // add 0x bytecode
//     .send({from: accounts[0]}); // remove 'gas'