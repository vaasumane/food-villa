import { useDispatch } from "react-redux";
import { IMAGE_CDN } from "../Constant";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ id, name, imageId, description, defaultPrice,price }) => {
    const dispatch = useDispatch();
    const handleRemoveCart =(id)=>{
        dispatch(removeItem(id));
    }
  return (
    <div
      className="flex gap-5 items-center shadow-xl p-5 justify-center bg-slate-100 my-5"
      key={id}
    >
      <div className="w-60 h-44">
      <img src={IMAGE_CDN + imageId} alt="image" className="w-full h-40 object-cover" />

      </div>
      <div className="w-3/4">
        <h1 className="text-2xl font-bold">{name} - Rs: {defaultPrice ? defaultPrice / 100 : price/100  }</h1>
        <p>{description}</p>
        <button
        className="p-2 m-2 bg-black text-white rounded-lg"
        onClick={() => handleRemoveCart(id)}
      >
        Remove Item
      </button>
      </div>
      {/* <p className="font-semibold text-end">Rs: {defaultPrice ? defaultPrice / 100 : price/100  }</p> */}
     
    </div>
  );
};
export default FoodItem;
