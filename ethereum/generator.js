import web3 from "./web3";
import ProjectGenerator from './build/ProjectGenerator.json';

const instance = new web3.eth.Contract(
    JSON.parse(ProjectGenerator.interface),
    '0x51B209f672797034F8a5a746415CfeCaBB9A7F7a'
);

export default instance;