// src/components/CryptoChart.jsx
import { useEffect, useState } from 'react';
import { getCryptoPrices } from '../api';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CryptoChart = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoPrices();
      const formattedData = Object.keys(data).map((key) => ({
        time: key,
        price: data[key].usd,
      }));
      setPrices(formattedData);
    };
    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={prices}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
