import React from 'react';

export default function ProductRow({ product }) {
  const nameStyle = product.stocked ? {} : { color: 'red' };

  return (
    <tr>
      <td style={nameStyle}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
