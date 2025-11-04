import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="forever logo" />
          <p>
            Stay connected with Forever Clothes for the latest trends, exclusive
            offers, and style inspiration. Follow us on social media and
            subscribe to our newsletter for updates and special promotions.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
     
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryoun.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className='text-gray-200'/>
        <p className='py-5 text-sm text-center'>Copyright 2025 forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
