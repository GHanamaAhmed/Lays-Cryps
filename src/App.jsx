import { useState } from 'react'
import Crispsfind from './crispsfind/crispsfind';
import Customer from './customer/customer';
import Footer from './footer/footer';
import Header from "./header/header";
import Lays from './lays/lays';
import Main from './main/main';
import Popular from './popular/popular';
import Provide from './provide/provide';
function App() {

  return (
    <>
      <Header />
      <Main />
      <Provide/>
      <Lays/>
      <Popular/>
      <Customer/>
      <Crispsfind/>
      <Footer/>
    </>
  )
}

export default App
