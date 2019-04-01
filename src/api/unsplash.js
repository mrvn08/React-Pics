import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID d31b43a1633960d67bb432532b56689d873bd74e2f55d95c2d5925c8dbd4bd7f'
    }
});