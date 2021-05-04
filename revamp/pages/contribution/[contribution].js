import Head from 'next/head'
import React, {useState} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';

//importing comps
import Background from '../../comps/Background';
import BackImage from '../../comps/BackImage';
import TopNav from '../../comps/TopNav';
import BottomNav from '../../comps/BottomNav';
import Header from '../../comps/Header';
import Contribution from '../../comps/Contribut';
import Para from '../../comps/Paragraph';
import DRButton from '../../comps/DRButtons';

const HomeCont = styled.div`
  .header{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;   
    font: 32px 'Lexend Giga';
    color: #14455A;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
  }

  .cont_header {
    margin-bottom: 40px;
  }

  .cont_imgCont
  {
    width: 160px;
    height: 160px;  
    margin-bottom: 30px;
  }
`;

const ContImg = styled.img`
  display: block;
  width: 100%; height: 100%;  
  object-fit: contain;
`

export default function contribution(){

  var ContTitle="";
  var text=""; 
  var src="";
  
  const router = useRouter();
  const {contribution} = router.query;  

  if(contribution === "bottom"){
    ContTitle = "Contribution - Bottom"
    text = "one pair of jeans uses about 20,000L of water"
    src = "/icon_bttm_cont.svg"
  }

  if(contribution === "top"){
    ContTitle = "Contribution - Top"
    text = "one cotton t-shirt uses about 2,700L of water"
    src = "/icon_top_cont.svg"
  }

  return <HomeCont>
  <Head>
  <title className = "title">{ContTitle}</title>
  </Head>

  <div className="container flex_col">
      <BackImage /> 
      <TopNav />
      <Background> 
        <div className = "flex_col">

          <Header
            text = "thank you for contributing to sustainabillity!" 
            h2Margin = "0 0 30px"
            h2Size = "1.65em" />
          <Para pMargin = "0 0 40px" pMax = "100%">
            by completing this DIY and repurposing your clothes, you took a step with helping sustainability.
          </Para>
          <Contribution className="flex_row"
            src = {src}
            text = {text}       
          />
          <Para pMargin = "0 0 40px" pMax = "100%">
            this means you helped contribute to conserving water usage and keeping our planet happy <br/>and healthy.
          </Para>

          <div class="cont_imgCont flex">
            <ContImg src ="/icon_award.svg"/>
          </div>

          <DRButton 
            onClick = {() => router.push("/welcome")}
            padding = "14px 35px"
            shadow = "0px 2px 4px rgba(0,0,0,.25)" text = "back to home" size = "1em" marginB = "20px">
          </DRButton>
        </div>

    </Background>
    <BottomNav />
  </div>
</HomeCont>
}

