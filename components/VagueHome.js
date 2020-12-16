import React from 'react';
import Image from 'next/image';

export default function VagueHome() {
  const vagueHomeContainer = {
    backgroundColor: '#fa6870',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const gridContainer = {
    backgroundColor: 'pink',
    height: '400px',
    display: 'grid',
    gridTemplateRows: 'repeat(11, 2fr)',
    gridTemplateColumns: 'repeat(11, 2fr)',
    gridGap: '10px',
    gridAutoRows: 'minmax(100px, auto)',
  };

  const titre = {
    color: 'white',
    fontSize: '1.2rem',
    textDecoration: 'underline',
    textDecorationThickness: '15px',
    gridArea: '2/2/6/6',
    textAlign: 'center',
    margin: 'auto',
  };

  const logo1 = {
    gridArea: '10/2/12/3',
    maxWidth: '100px',
  };
  const logo2 = {
    gridArea: '9/3/11/4',
    maxWidth: '100px',
  };
  const logo3 = {
    gridArea: '8/4/10/5',
    maxWidth: '100px',
  };
  const logo4 = {
    gridArea: '7/5/9/6',
    maxWidth: '100px',
  };
  const logo5 = {
    gridArea: '6/6/8/7',
    maxWidth: '100px',
  };
  const logo6 = {
    gridArea: '5/7/7/8',
    maxWidth: '100px',
  };
  const logo7 = {
    gridArea: '4/8/6/9',
    maxWidth: '100px',
  };
  const logo8 = {
    gridArea: '3/9/5/10',
    maxWidth: '100px',
  };
  const logo9 = {
    gridArea: '2/10/4/11',
    maxWidth: '100px',
  };

  return (
    <div style={vagueHomeContainer}>
      <div style={gridContainer}>
        <h5 style={titre}>Ils contribuent au dispositif</h5>
        <div style={logo1}>
          <Image
            src="/images/logosContibuteurs/advizi.png"
            alt="logo Advizi"
            width={100}
            height={100}
          />
        </div>
        <div style={logo2}>
          <Image
            src="/images/logosContibuteurs/caf.png"
            alt="logo Allocations Familiales"
            width={100}
            height={100}
          />
        </div>
        <div style={logo3}>
          <Image
            src="/images/logosContibuteurs/boostinlyon.png"
            alt="logo Boost in Lyon"
            width={100}
            height={100}
          />
        </div>
        <div style={logo4}>
          <Image
            src="/images/logosContibuteurs/h7.png"
            alt="logo h 7"
            width={100}
            height={100}
          />
        </div>
        <div style={logo5}>
          <Image
            src="/images/logosContibuteurs/bpiFrance.png"
            alt="logo B P I France"
            width={100}
            height={100}
          />
        </div>
        <div style={logo6}>
          <Image
            src="/images/logosContibuteurs/frenchTech.png"
            alt="logo la french tech"
            width={100}
            height={100}
          />
        </div>
        <div style={logo7}>
          <Image
            src="/images/logosContibuteurs/inpi.png"
            alt="logo I N P I"
            width={100}
            height={100}
          />
        </div>

        <div style={logo8}>
          <Image
            src="/images/logosContibuteurs/adie.png"
            alt="logo adie"
            width={100}
            height={100}
          />
        </div>
        <div style={logo9}>
          <Image
            src="/images/logosContibuteurs/region.png"
            alt="logo region auvergne rhone alpes"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
