import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearItems } from "../utils/cartSlice";

const Cart = () => {
  const getCartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = ()=>{
    dispatch(clearItems());
  }
  return (
    <>
      <div className="section lg:mx-28">
        <div className="container mx-auto py-10">
          <div className="flex justify-between">
            <h1 className="font-semibold text-4xl py-5 ">Cart Items</h1>
            <div>
              <button
                className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={() => handleClearCart()}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className=" ">
            {getCartItem.length > 0 ? (
              getCartItem.map((item) => (
                <FoodItem key={item.id} {...item.payload} />
              ))
            ) : (
              <span className="p-5 m-5 align-center text-4xl">
                Cart is empty
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
