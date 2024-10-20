import { useSelector } from "react-redux";
import ProductCard from "./components/ProductCard";
import { useGetAllProductsQuery } from "./features/getProductsApi";
import { RootState } from "./store";
import { selectTotalPrice, selectTotalQuantity } from "./features/cartSlice";
import CartCard from "./components/CartCard";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const App = () => {
  interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  const { data, isLoading, isError } = useGetAllProductsQuery(void 0);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useSelector((state: RootState) =>
    selectTotalQuantity(state)
  );
  const totalPrice = useSelector((state: RootState) => selectTotalPrice(state));
  console.log(cartItems, totalPrice, totalQuantity);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
      setIsCartOpen(false);
    }
  };
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className=" bg-[#111827] min-h-screen">
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching products.</p>}
      <AnimatePresence>
        {isCartOpen && (
          <div className="bg-[#1F2937]/70 p-[20px] max-mobile:p-[10px] absolute h-screen w-full flex items-center justify-center">
            <motion.div
              initial={{
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.7,
                opacity: 0,
              }}
              ref={cartRef}
              className="max-h-[80%] overflow-y-auto p-[40px] max-mobile:p-[20px] rounded-[10px] bg-[#111827]"
            >
              {cartItems.length === 0 ? (
                <h1 className="text-[#ffffffc0] text-[20px] font-[700]">
                  No Product Added to Cart
                </h1>
              ) : (
                cartItems?.map((product) => (
                  <CartCard
                    key={product.id}
                    title={product.title}
                    image={product.image}
                    id={product.id}
                    price={product.price}
                    quantity={product.quantity}
                  />
                ))
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <div className=" max-w-[1000px] mx-auto px-[20px] pb-[80px]">
        <div className=" flex justify-between items-center border-b border-[#374151] py-[30px] mb-[30px]">
          <div>
            <span className=" text-white text-[35px] max-mobile:text-[18px] transition-all text-nowrap font-[700]">
              <span className=" text-[#6875F5]">@</span>e-
              <span className=" text-[#6875F5]">commerce</span>
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(!isCartOpen)}
            className=" transition-all gap-[10px] flex items-center hover:bg-[#1F2937] p-[7px] rounded-[7px]"
          >
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                height={30}
                width={30}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M2.08416 2.7512C2.22155 2.36044 2.6497 2.15503 3.04047 2.29242L3.34187 2.39838C3.95839 2.61511 4.48203 2.79919 4.89411 3.00139C5.33474 3.21759 5.71259 3.48393 5.99677 3.89979C6.27875 4.31243 6.39517 4.76515 6.4489 5.26153C6.47295 5.48373 6.48564 5.72967 6.49233 6H17.1305C18.8155 6 20.3323 6 20.7762 6.57708C21.2202 7.15417 21.0466 8.02369 20.6995 9.76275L20.1997 12.1875C19.8846 13.7164 19.727 14.4808 19.1753 14.9304C18.6236 15.38 17.8431 15.38 16.2821 15.38H10.9792C8.19028 15.38 6.79583 15.38 5.92943 14.4662C5.06302 13.5523 4.99979 12.5816 4.99979 9.64L4.99979 7.03832C4.99979 6.29837 4.99877 5.80316 4.95761 5.42295C4.91828 5.0596 4.84858 4.87818 4.75832 4.74609C4.67026 4.61723 4.53659 4.4968 4.23336 4.34802C3.91052 4.18961 3.47177 4.03406 2.80416 3.79934L2.54295 3.7075C2.15218 3.57012 1.94678 3.14197 2.08416 2.7512Z"
                    fill="#d1d5db"
                  />{" "}
                  <path
                    d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                    fill="#d1d5db"
                  />{" "}
                  <path
                    d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                    fill="#d1d5db"
                  />{" "}
                </g>
              </svg>
            </span>
            <div className=" text-left font-[500] text-[#D1D5DB]">
              <p className=" text-[12px]">Item : {totalQuantity}</p>
              <p className=" text-[12px]">Price : ${Math.floor(totalPrice)}</p>
            </div>
          </button>
        </div>
        <div className=" grid grid-cols-4 max-laptop-sm:grid-cols-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1 gap-[20px]">
          {!isLoading &&
            data?.map((product: Product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                image={product.image}
                rating={{
                  rate: product.rating.rate,
                  count: product.rating.count,
                }}
                id={product.id}
                price={product.price}
              />
            ))}
        </div>
      </div>
      <p className=" text-center py-[10px] text-[#D1D5DB] text-[12px]">
        Design and Developed by{" "}
        <a
          className=" text-[#6C63FF]"
          target="_blank"
          href="https://abdullah-al-mridul-dev.vercel.app/"
        >
          Abdullah
        </a>
      </p>
    </div>
  );
};
export default App;
