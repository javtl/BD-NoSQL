import { useEffect, useState } from "react";
import { fetchCryptoPrice } from "../../api";

const CryptoCard = ({ crypto }) => {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    const loadPrice = async () => {
      const data = await fetchCryptoPrice(crypto);
      if (data) setPrice(data.price);
    };

    loadPrice();
  }, [crypto]);

  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{crypto.toUpperCase()}</h2>
      <p className="text-xl">{price ? `$${price}` : "Cargando..."}</p>
    </div>
  );
};

export default CryptoCard;
