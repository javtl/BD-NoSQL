
import CryptoCard from "../components/CryptoCard";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">Comparador de Precios Crypto</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <CryptoCard crypto="bitcoin" />
        <CryptoCard crypto="ethereum" />
        <CryptoCard crypto="cardano" />
      </div>
    </div>
  );
};

export default Home;
