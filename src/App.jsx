import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
// Switch is used to group routes, Route is used to define individual routes, and Link is used for navigation between routes.
import { Layout, Typography, Space } from 'antd' 
// Layout provides a structure for the application, Typography is used for text styling, and Space is used for spacing between elements. these are components from the Ant Design library. for more details visit https://ant.design/components/overview/
import { Navbar, Exchanges, Homepage, Cryptocurrencies, CryptoDetails, News } from './components'
// this type of import is called named import. It imports the Navbar component from the components directory.
import './App.css'

function App() {

  return (
    
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<Homepage/>} />
              <Route path="/exchanges" element={<Exchanges/>} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies/>} />
              <Route path="/crypto/:coinId" element={<CryptoDetails/>} />
              <Route path="/news" element={<News/>} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
            CryptoWorld <br />
            All rights reserved
          </Typography.Title>
          <Space>
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
