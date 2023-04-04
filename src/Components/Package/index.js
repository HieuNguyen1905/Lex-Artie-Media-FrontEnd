import React from 'react';
import Table from 'react-bootstrap/Table';

function Package() {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Category</th>
          <th>Price</th>
          <th>Scope</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Portrait</td>
          <td>Starting from $250</td>
          <td>Up to 10 high resolution edited images; All files delivered</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Engagement/Prewedding</td>
          <td>Staring from $700</td>
          <td>Up to 25 high resolution edited images; All files delivered </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Wedding</td>
          <td>Starting from $1500</td>
          <td>Up to 100 high resolution edited images; All files delivered. </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Others</td>
          <td>$150/hr</td>
          <td>All files delivered.</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Package;