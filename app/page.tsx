import React from 'react';
import { Header } from './header';
import { Content } from './layout';
import { Footer } from './layout';
import { HeaderPc } from './headerpc';

export default function Home() {
  return (
  <main> 
    <HeaderPc/>
    <Header/>
    <Content/>
    <Footer/>
</main>
  )
}
