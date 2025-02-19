// src/components/CryptoList.jsx
import { useEffect, useState } from 'react';
import { getCryptoPrices } from '../api';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoPrices();
      setCryptos(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Precios en Tiempo Real</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Object.keys(cryptos).map((crypto) => (
          <li key={crypto} style={{ margin: '10px 0' }}>
            <strong>{crypto}</strong>: ${cryptos[crypto].usd}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CryptoList;
