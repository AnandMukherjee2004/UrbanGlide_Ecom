import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeItem } from "../../redux/cartReducer";
import { loadStripe } from "@stripe/stripe-js";
import { makeRequest } from "../../makeRequest";

function Cart() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.price;
    });
    return total.toFixed(2);
  };

  const stripePromise = loadStripe(
    "pk_test_51OgSacSCNBWIRqPpOyojdIsRMvSrt8RoNgJMwpSKXsWp2sCN8ORH8m9q6ZXT3SxPIOokznDIfuusvXYhdrl27Hjl00zgTm5tBb"
  );

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const res = await makeRequest.post("/orders", { products });
      console.log(res);

      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="cart bg-white p-5 absolute right-0 top-6 z-50 w-[30vw]">
        {products?.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 gap-2 items-center border-b-2 border-b-gray-300 pb-5"
          >
            <div className="col-span-1">
              <img
                className="w-32"
                src={import.meta.env.VITE_API_UPLOAD_URL + item.img}
                alt=""
              />
            </div>
            <div className="col-span-2">
              <h1 className="text-md capitalize flex justify-between ">
                {item.title}
                <button>
                  <DeleteOutlineIcon
                    className="cursor-pointer"
                    onClick={() => dispatch(removeItem(item.id))}
                  />
                </button>
              </h1>
              <h1 className="text-md capitalize">&#8377;{item.price}</h1>
              <div className="info mt-2">
                <p>Quantity: {item.quantity}</p>
                <p className="w-full">{item.desc?.substring(0, 90)}...</p>
              </div>
            </div>
          </div>
        ))}

        <div className="total flex justify-between items-center mt-2 ">
          <h1 className=" text-lg font-medium">Total</h1>
          <h1 className=" text-lg font-medium">&#8377;{totalPrice()}</h1>
        </div>

        <button
          className=" w-full bg-black text-white text-lg font-semibold py-2 mt-3"
          onClick={handlePayment}
        >
          Checkout
        </button>

        <button className=" w-full text-lg font-semibold py-2 border border-black mt-3">
          Shopping Bag
        </button>
      </div>
    </>
  );
}

export default Cart;
