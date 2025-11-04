import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link className="block text-gray-800 cursor-pointer" to={`/product/${id}`}>
      <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <div className="overflow-hidden">
          <img
            className="w-full object-contain transform hover:scale-105 transition-transform duration-300 ease-in-out"
            src={image?.[0]}
            alt={name}
          />
        </div>
        <div className="p-3 text-center">
          <p className="text-sm font-medium truncate">{name}</p>
          <p className="text-sm font-semibold mt-1">
            {currency}
            {price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
