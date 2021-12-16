import web3 from './web3';
import CampaignFactory from './contract_build/CampaignFactory.json';


const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xE00CdBC2807adfe3861C339e5d5aeCE61884ff08'
);

export default instance;