import React from 'react'
import Explore from '../components/Explore';
import Discounted from '../components/Discounted';
import Featured from '../components/Featured';
import Highlights from '../components/Highlights';
import Landing from '../components/Landing';

export default function Home() {
  return (
        <>
        <Landing />
        <Highlights />
        <Featured />
        <Discounted />
        <Explore />
        </>
  );

}
