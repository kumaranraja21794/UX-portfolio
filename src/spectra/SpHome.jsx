import React from 'react';
import SpChrome from './SpChrome';
import SpHeader from './SpHeader';
import SpHero from './SpHero';
import SpTicker from './SpTicker';
import SpWork from './SpWork';
import SpCraft from './SpCraft';
import SpContact from './SpContact';

export const SpHome = () => (
  <div className="sp-page">
    <SpChrome />
    <SpHeader />
    <SpHero />
    <SpTicker />
    <SpWork />
    <SpCraft />
    <SpContact />
  </div>
);

export default SpHome;
