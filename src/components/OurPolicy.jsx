import { assets } from '../assets/assets';
import SinglePolicy from './SinglePolicy';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <SinglePolicy
        image={assets.exchange_icon}
        title="Easy Exchange Policy"
        description="We offer hassle free exchange policy"
      />
      <SinglePolicy
        image={assets.quality_icon}
        title="7 Days Return Policy"
        description="We provide 7 days free return policy"
      />
      <SinglePolicy
        image={assets.support_img}
        title="Best Customer Support"
        description="We provide 24/8 customer support"
      />
    </div>
  );
};

export default OurPolicy;
