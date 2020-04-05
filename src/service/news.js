/*
    function which fetch data from newsApi
*/
import {article_url, country_code, api_key} from '../config/rest-config';
import axios from 'axios';

export default async function  FetchNews(category){
    const url = `${article_url}?country=${country_code}&category=${category}&apiKey=${api_key}`
    const  content = await axios.get(url);
    // console.log(content.data.articles[0])
    return content.data.articles;
}