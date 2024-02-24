import React from 'react'
import CardComponent from '../components/Carts';
import Maincarousels from '../components/Carousels';
import NavTitle from '../layouts/Header';
import NavScrollExample from '../components/Searchbar';
import BottomButton from '../components/BottomButton';
import Footerblank from '../layouts/Footer';
import Container from 'react-bootstrap/esm/Container';
import {Row,Col} from 'react-bootstrap';
import Result from '../components/Result';



function HomePage() {
  return (
    <div>
        <div>
   < NavTitle />
   </div>
    <div style={{padding:'1rem'}}>
      < Maincarousels />
    </div>
      <Result/>
     {/*  <BottomButton/> */}
   
      <Footerblank />
    </div>
  )
}

export default HomePage