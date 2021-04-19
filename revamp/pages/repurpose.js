import Head from 'next/head';
import React, {useState} from 'react';
import styled from 'styled-components';
import TopNav from '../comps/TopNav';
import BottomNav from '../comps/BottomNav';
import ReButton from '../comps/ReButtons';
import Header from '../comps/Header';
import {useRouter} from 'next/router';
import Background from '../comps/Background';

const ButtonCont = styled.div`
display: flex;
justify-content: center;
margin-top: 100px;
`;

export default function Repurpose() {

  const router = useRouter();
  const repurposeContents = 
    <div className = "flex_col">
      <Header text="what would you like to repurpose?"></Header>
      <ButtonCont>
      <ReButton
      text="tops"
      src="/sweaters.svg"
      alt="top"
      onClick={()=>router.push("/tops")}
      />
      <ReButton 
      text="pants"
      src="/pants.svg"
      alt="pant"
      onClick={()=>router.push("/bottoms")}
      />
      </ButtonCont>
    </div>

  return <div>
    <Head>
      <title className = "title">Repurpose</title>
    </Head>
    <div className="container flex_col">
      <TopNav />
      <Background contents={repurposeContents} padding="40px 20px 100px 20px"></Background>
    <BottomNav />
    </div>
    </div>
  }

