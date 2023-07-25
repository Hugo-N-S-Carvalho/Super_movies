import axios from 'axios'

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/',
    params:{
        api_key: '02714a512e539e66f1cf33bfac8cde63',
        language: 'pt-BR',
        page: 1
    }
})


export default api