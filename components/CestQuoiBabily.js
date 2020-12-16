import React from 'react';
import Link from 'next/link';

const cestQuoiBabily = {
  margin: '25%',
};

export default function CestQuoiBabily() {
  return (
    <div style={cestQuoiBabily}>
      <h3>C'est quoi Babily?</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus
      </p>
      <Link href="/decouvrir">
        <button type="button">Découvrir</button>
      </Link>
    </div>
  );
}
