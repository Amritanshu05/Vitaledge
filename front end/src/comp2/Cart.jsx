// import PropTypes from "prop-types";
// import { useContext } from "react";
// import { CartContext } from "../context/cart2.jsx";
// import { toast } from "react-toastify";

// export default function Cart({ showModal, toggle }) {
//   const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
//     useContext(CartContext);

//   const notifyRemovedFromCart = (item) =>
//     toast.error(`${item.title} removed from cart!`, {
//       position: "top-center",
//       autoClose: 2000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//       style: {
//         backgroundColor: "#000",
//         color: "#fff",
//       },
//     });

//   const notifyCartCleared = () =>
//     toast.error(`Cart cleared!`, {
//       position: "top-center",
//       autoClose: 2000,
//       hideProgressBar: true,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       theme: "colored",
//       style: {
//         backgroundColor: "#000",
//         color: "#fff",
//       },
//     });

//   const handleRemoveFromCart = (product) => {
//     removeFromCart(product);
//     notifyRemovedFromCart(product);
//   };

//   if (!showModal) return null; // ✅ Hide modal if not open

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
//       <div className="bg-white dark:bg-black p-10 rounded-lg w-[40rem] max-h-[90vh] overflow-y-auto">
//         <h1 className="text-2xl font-bold mb-5">Cart</h1>
//         <button
//           className="absolute top-5 right-5 px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700"
//           onClick={toggle}
//         >
//           Close
//         </button>

//         <div className="flex flex-col gap-4">
//           {cartItems.map((item) => (
//             <div className="flex justify-between items-center" key={item._id}>
//               <div className="flex gap-4">
//                 <img
//                   src={item.imageUrl}
//                   alt={item.title}
//                   className="rounded-md w-24 h-24"
//                 />
//                 <div>
//                   <h1 className="text-lg font-bold">{item.title}</h1>
//                   <p className="text-gray-600">₹{item.price}</p>
//                 </div>
//               </div>
//               <div className="flex gap-4 items-center">
//                 <button
//                   className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700"
//                   onClick={() => addToCart(item)}
//                 >
//                   +
//                 </button>
//                 <p>{item.quantity}</p>
//                 <button
//                   className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700"
//                   onClick={() => handleRemoveFromCart(item)}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* ✅ Checkout and Clear Buttons */}
//         {cartItems.length > 0 ? (
//           <div className="mt-5 flex flex-col gap-4">
//             <h1 className="text-lg font-bold">Total: ₹{getCartTotal().toFixed(2)}</h1>
//             <button
//               className="w-full px-4 py-2 bg-green-600 text-white text-xs font-bold uppercase rounded hover:bg-green-700"
//               onClick={() => {
//                 window.location.href = "/checkout";
//               }}
//             >
//               Proceed to Checkout
//             </button>
//             <button
//               className="w-full px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700"
//               onClick={() => {
//                 clearCart();
//                 notifyCartCleared();
//               }}
//             >
//               Clear cart
//             </button>
//           </div>
//         ) : (
//           <h1 className="text-lg font-bold text-center mt-5">Your cart is empty</h1>
//         )}
//       </div>
//     </div>
//   );
// }

// Cart.propTypes = {
//   showModal: PropTypes.bool,
//   toggle: PropTypes.func.isRequired,
// };

import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/cart2.jsx";
import { toast } from "react-toastify";

export default function Cart({ showModal, toggle }) {
  const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
    useContext(CartContext);

  const notifyRemovedFromCart = (item) =>
    toast.error(`${item.title} removed from cart!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const notifyCartCleared = () =>
    toast.error(`Cart cleared!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
      style: {
        backgroundColor: "#000",
        color: "#fff",
      },
    });

  const handleRemoveFromCart = (product) => {
    removeFromCart(product);
    notifyRemovedFromCart(product);
  };

  return (
    showModal && (
      <div className="flex-col flex items-center fixed inset-0 left-1/4 bg-white dark:bg-black gap-8 p-10 text-black dark:text-white font-normal uppercase text-sm mt-20 overflow-y-auto max-h-screen z-50">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="absolute right-16 top-10">
          <button
            className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            onClick={toggle}
          >
            Close
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {cartItems.map((item) => (
            <div className="flex justify-between items-center" key={item._id}>
              <div className="flex gap-4">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="rounded-md w-24 h-24"
                />
                <div className="flex gap-8 justify-center">
                  <h1 className="text-lg font-bold">{item.title}</h1>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => {
                    const cartItem = cartItems.find(
                      (product) => product._id === item._id
                    );
                    if (cartItem?.quantity === 1) {
                      handleRemoveFromCart(item);
                    } else {
                      removeFromCart(item);
                    }
                  }}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Show Checkout and Clear Cart Button when Cart has items */}
        {cartItems.length > 0 ? (
          <div className="flex flex-col justify-between items-center gap-4">
            <h1 className="text-lg font-bold">Total: ₹{getCartTotal().toFixed(2)}</h1>
            
            {/* ✅ Go to Checkout Button */}
            <button
              onClick={() => {
                toggle(); // Close the modal
                window.location.href = "/checkout"; // Redirect to Checkout Page
              }}
              className="w-full px-4 py-2 bg-green-600 text-white text-xs font-bold uppercase rounded hover:bg-green-700 focus:outline-none focus:bg-green-700"
            >
              Proceed to Checkout
            </button>

            {/* ✅ Clear Cart Button */}
            <button
              className="w-full px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
              onClick={() => {
                clearCart();
                notifyCartCleared();
              }}
            >
              Clear cart
            </button>
          </div>
        ) : (
          <h1 className="text-lg font-bold">Your cart is empty</h1>
        )}
      </div>
    )
  );
}

Cart.propTypes = {
  showModal: PropTypes.bool,
  toggle: PropTypes.func,
};
