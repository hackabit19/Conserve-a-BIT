import web3 from "./web3";
import ProjectGenerator from './build/ProjectGenerator.json';

const instance = new web3.eth.Contract(
    JSON.parse(ProjectGenerator.interface),
    '0xb3d3964Da6F340807B9835844EA320bC7070820f'
);

export default instance;