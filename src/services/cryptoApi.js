import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': 'baac90deeamsh9c9a436ab08ecb3p19adeajsna1ede632d2e8'
      }
}


const baseUrl= 'https://coinranking1.p.rapidapi.com/coins';

const useGetCryptosQuery = async() => {
    
    
}

module.exports = {
    useGetCryptosQuery,
} ;