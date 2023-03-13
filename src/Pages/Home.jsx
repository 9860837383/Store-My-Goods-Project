import React from 'react'
import Address from './Address';
import Benefits from './Benefits';
import Card from './Card';
import Carousel from './Carousel';
import FullfillmentServices from './FulfillmentServices';
import Navbar from './Navbar';
import Reviews from './Reviews';
import Safety from './Safety';
import Storables from './Storables';
import StoragePlans from './StoragePlans';

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Carousel/>
        <Card/>
        <Storables/>
        <StoragePlans/>
        <Benefits/>
        <FullfillmentServices/>
        <Safety/>
        <Reviews/>
        <Address/>
    </div>
  )
}

export default Home;