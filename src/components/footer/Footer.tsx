import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" px-1 py-12 border-t border-customGray mt-12">
      <div className="flex flex-col mx-auto gap-9 max-w-screen-xl">
        <div className="flex justify-between gap-4 md:0 flex-col md:flex-row">
          <div className="flex flex-col md:gap-14 font-poppins">
            <h2 className="font-bold text-2xl">Funiro.</h2>
            <div className="text-base text-customGray">
              <p>400 University Drive Suite 200 Coral Gables,</p>
              <p>FL 33134 USA</p>
            </div>
            <nav>
              <ul className="flex justify-center md:justify-start gap-4">
                <li className="rounded-full shadow-md p-3">
                  <FaFacebookF />
                </li>
                <li className="rounded-full shadow-md p-3">
                  <FaInstagram />
                </li>
                <li className="rounded-full shadow-md p-3">
                  <FaTwitter />
                </li>
                <li className="rounded-full shadow-md p-3">
                  <FaLinkedinIn />
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex md:flex-col gap-4 md:gap-14 self font-poppins font-medium">
            <h4 className="text-base text-customGray">Links</h4>
            <nav>
              <ul className="flex md:flex-col gap-1 md:gap-[2.87rem]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/shop">Shop</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex md:flex-col gap-4 md:gap-14 font-poppins font-medium">
            <h4 className="text-base text-customGray">Help</h4>
            <nav>
              <ul className="flex md:flex-col gap-1 md:gap-[2.87rem]">
                <li>
                  <Link to="#">Payment Options</Link>
                </li>
                <li>
                  <Link to="#">Returns</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policies</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex md:flex-col gap-4 md:gap-14 font-poppins">
            <h4 className="text-base text-customGray">Newsletter</h4>
            <div className="flex md:gap-3">
              <input
                type="text"
                id="newsletterInput"
                name="newsletterInput"
                placeholder="Enter Your Email Address"
                className="font-normal text-sm underline underline-offset-[3px] outline-none"
              />
              <button className="font-bold text-sm underline underline-offset-[3px]">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <hr />
        <h2 className="font-normal font-poppins text-base text-center md:text-start">
          2023 furino. All rights reverved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
