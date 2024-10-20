import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cartSlice";

interface Product {
  image: string;
  title: string;
  price: number;
  id: number;
  quantity: number;
}

const CartCard: React.FC<Product> = ({ image, title, id, price, quantity }) => {
  const dispatch = useDispatch();
  const removeCart = (productId: number) => {
    dispatch(removeFromCart(productId));
  };
  return (
    <div className=" bg-[#1F2937] mb-[20px] p-[15px] flex max-mobile:flex-col gap-[20px] rounded-[10px]">
      <img
        className="  h-[110px] w-[150px] max-mobile:w-full object-cover rounded-[10px]"
        src={image}
        alt={title}
      />
      <div className=" flex flex-1 flex-col gap-[20px] justify-between">
        <div>
          <h2
            style={{
              color: "rgb(156, 163, 175)",
            }}
            className=" line-clamp-2 overflow-hidden text-ellipsis font-[500] max-w-[300px] text-[16px] "
          >
            {title}
          </h2>
        </div>
        <div className=" flex items-center justify-between">
          <div>
            <p className=" text-[#6C63FF] text-[18px] font-[600]">${price}</p>
          </div>
          <div className="text-[#C56D09] text-[18px] font-[600]">
            <p>x{quantity}</p>
          </div>
          <button
            onClick={() => removeCart(id)}
            style={{
              color: "rgb(17, 24, 39)",
            }}
            className=" font-[900] px-[10px] flex gap-[5px] items-center justify-center w-max bg-[#818CF8] text-[15px] py-[5px] transition-all hover:bg-[#6366F1] rounded-[5px]"
          >
            <span>X</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
