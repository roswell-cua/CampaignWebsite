import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x410e1539caD31F13bE0E64a1223A57ADC3cEB646'
);

export default instance;
