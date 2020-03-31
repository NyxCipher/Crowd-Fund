import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	'0x5AC30955CD588B646D3aAa69A1b121d38A8C44F5'
);

export default instance;