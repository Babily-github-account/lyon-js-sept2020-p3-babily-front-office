import React from 'react';
import Link from 'next/link';

const cestQuoiBabily = {
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  paddingTop: '70px',
  paddingBottom: '70px',
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: 'white',
};

const container = {
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '70%',
  maxWidth: '600px',
};

const titre = {
  color: '#fa6870',
  fontFamily: "'Montserrat Alternates', sans-serif",
  textDecorationLine: 'underline',
  textDecorationStyle: 'solid',
  textDecorationColor: '#fa6870',
  textDecorationThickness: '15px',
  fontSize: '30px',
};

const definition = {
  fontFamily: "'Krub', sans-serif",
  fontSize: '18px',
  textAlign: 'center',
  paddingTop: '5%',
};

const boutonDecouvrir = {
  margin: 'auto',
  fontFamily: "'Krub', sans-serif",
  fontSize: '14px',
  padding: '10px',
  width: '25%',
  backgroundColor: '#fa6870',
  color: 'white',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  border: 'none',
  borderRadius: '14px',
};

export default function CestQuoiBabily() {
  return (
    <div style={cestQuoiBabily}>
      <div style={container}>
        <h3 style={titre}>C'est quoi Babily?</h3>
        <p style={definition}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus
        </p>
        <Link href="/concept">
          <button type="button" style={boutonDecouvrir}>
            Découvrir
          </button>
        </Link>
      </div>
    </div>
  );
}
