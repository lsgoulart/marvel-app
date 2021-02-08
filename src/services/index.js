import axios from 'axios'
import configs from '../configs'

axios.defaults.baseURL = `https://gateway.marvel.com/v1/public/`
axios.defaults.params = {}
axios.defaults.params.apikey = configs.API_PUBLIC_KEY

export const getComics = params =>
  axios.get('comics', {
    params,
  })
export const getSeries = () => axios.get('series')
