import React from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import { Layout,Typography,Space,} from 'antd';

import {Navbar,Homepage,Exchanges,Cryptocurrencies,News,CryptoDetails} from './components';
import './App.css';
import { HomeOutlined } from '@ant-design/icons';
const App = () => {
  return (
    <div className="app">
        <div classname="navbar">
            <Navbar/>
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
                 <Switch>
                  
                   <Route exact='/'>
                      <Homepage/>
                   </Route>
                   <Route exact='/Exchanges'>
                      <Exchanges/>
                   </Route>
                   <Route exact='/Cryptocurrencies'>
                      <Cryptocurrencies/>
                   </Route>
                   <Route exact='/Crypto/:coinId'>
                      <CryptoDetails/>
                   </Route>
                   <Route exact='/News'>
                      <News/>
                   </Route>
                 </Switch>
                 
            </div>
          </Layout>

            <div > 
              <Typography.Title level={5} style={{ color: 'black', textAlign: 'right'}}>Copyright © 2022
              All Rights Reserved.
            </Typography.Title>
            <Space level={5} style={{ color: 'black', textAlign: 'center' }}>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
            </div>
        </div>
    </div>
  )
}

export default App