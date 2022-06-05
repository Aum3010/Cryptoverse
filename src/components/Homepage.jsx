import React from 'react';
import millify from 'millify';
import { Typography,Row ,Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
// import { useGetCryptosQuery } from '../services/cryptoApi';
const {Title} = Typography;

const Homepage = () => {
  // const {data}= await useGetCryptosQuery()
  const baseUrl= 'https://coinranking1.p.rapidapi.com/coins';
  let resp = fetch(baseUrl,{
    method:"GET",
    headers: {
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
        'X-RapidAPI-Key': 'baac90deeamsh9c9a436ab08ecb3p19adeajsna1ede632d2e8',
    }
  })
console.log(resp);
const data =  resp.body;
console.log(data);

  // const globalStats = data?.data?.stats;
  const globalStats = {
            "totalCoins": 14200,
            "totalMarkets": 26390,
            "totalExchanges": 177,
            "totalMarketCap": "1286011711805",
            "total24hVolume": "39724265824"
  };
  return (
  <>
  <Title level={2} className='heading'>Current Global Crypto Stats</Title>
  <Row>
      <Col span={12}><Statistic title='Total Cryptocurrencies' value={globalStats.totalCoins}/></Col>

      <Col span={12}><Statistic title='Total Exchanges' value= {millify(globalStats.totalExchanges)}/></Col>

      <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)}/></Col>

      <Col span={12}><Statistic title='Total 24 Hr Data' value={millify(globalStats.total24hVolume)}/></Col>

      <Col span={12}><Statistic title='Total Markets' value={millify(globalStats.totalMarkets)}/></Col>
      
  </Row>
  </>

)
}

export default Homepage