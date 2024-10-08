import { IoMdShare } from "react-icons/io";
import { VscArrowSwap, VscHeart } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { addProductToCart } from "../../redux/features/cart/cartSlice";
import { ProductWithQuantity } from "../../types/product";
import Balloon from "./Balloon";

const Product = ({ product }: { product: ProductWithQuantity }) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleClickAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(addProductToCart(product));
  };

  const handleClickNavigate = () => {
    navigate(`/shop/${product.sku}`);
  };

  const truncateText = (text: string, maxWords: number): string => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="relative flex flex-col font-poppins w-[17.8125rem] group self-start cursor-pointer">
      <div className="relative">
        <img
          src={product.images?.mainImage}
          alt={product.title}
          className="h-[18.75rem] object-cover"
        />
        <div className="absolute top-6 right-6 flex flex-col gap-1">
          {product.discountPercentage > 0 ? (
            <Balloon discount={product.discountPercentage} />
          ) : null}
          {product.new && <Balloon discount={null} />}
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 bg-customGray7">
        <h4 className="font-semibold text-2xl text-customGray5">
          {product.title}
        </h4>
        <p className="font-medium text-base text-customGray6">
          {product.description?.short
            ? truncateText(product.description.short, 10)
            : ""}
        </p>
        <div className="flex gap-4 items-center">
          <span className="text-xl text-customGray5 font-semibold">
            Rp {product.salePrice > 0 ? product.salePrice : product.normalPrice}
          </span>
          {product.salePrice > 0 ? (
            <span className="text-base text-customGray8 font-normal line-through">
              Rp {product.normalPrice}
            </span>
          ) : null}
        </div>
      </div>
      <div
        onClick={handleClickNavigate}
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-6"
      >
        <button
          onClick={handleClickAddToCart}
          className="text-customGold bg-white py-3 px-14 text-base font-semibold"
        >
          Add to cart
        </button>
        <nav>
          <ul className="flex items-center gap-4 text-white font-semibold text-base">
            <li>
              <button className="flex items-center gap-1 bg-transparent border-none">
                <IoMdShare className="text-xl" />
                <span>Share</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 bg-transparent border-none">
                <VscArrowSwap className="text-xl" />
                <span>Compare</span>
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 bg-transparent border-none">
                <VscHeart className="text-xl" />
                <span>Like</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Product;
