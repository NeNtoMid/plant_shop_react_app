import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://obscure-wildwood-31802.herokuapp.com',
});

export default instance;
