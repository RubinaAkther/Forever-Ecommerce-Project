import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from "./Title"

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  return <div className='w-full'>
    <div className="text-2xl">
      <Title main={'CART'} highlight={'TOTALS'}/>
    </div>
    <div className="flex flex-col gap-2 mt-2 text-sm">
      
    </div>
  </div>;
};

export default CartTotal;
