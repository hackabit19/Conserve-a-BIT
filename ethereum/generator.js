import web3 from "./web3";
import ProjectGenerator from './build/ProjectGenerator.json';

const instance = new web3.eth.Contract(
    JSON.parse(ProjectGenerator.interface),
    '0xCf3aD0afBaBa5cE378724d9A09cAC62c6f2E08E7'
);

export default instance;