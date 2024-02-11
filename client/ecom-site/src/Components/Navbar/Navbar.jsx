import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Cart from "../Cart/Cart";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import Myacc from "../Myacc/Myacc";

function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if(latest > previous && latest > 150){
      setHidden(true)
    }else{
      setHidden(false)
    }
  });
  const [isAccountHovered, setIsAccountHovered] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleAccountMouseEnter = () => {
    setIsAccountHovered(true);
  };

  const handleAccountMouseLeave = () => {
    setIsAccountHovered(false);
  };

  const handleCartMouseEnter = () => {
    setIsCartHovered(true);
  };

  const handleCartMouseLeave = () => {
    setIsCartHovered(false);
  };

  return (
    <>
      <motion.div
        variants={{
          hidden: { y: "-100%" },
          visible: { y: "0" },
        }}
        animate={hidden ? "hidden" : "visible"}
        className="navbar sticky top-0 h-40 flex flex-col justify-evenly items-center z-50  px-8 bg-white"
        transition={{ duration: 0.35, ease: "easeInOut" }}
      >
        <div className="wrapper upper-nav  flex justify-between items-center w-full ">
          <div className="left flex gap-6 ">
            <Link className="text-sm" to="/">
              About
            </Link>
            <Link className="text-sm" to="/">
              Contact
            </Link>
            <Link className="text-sm" to="/">
              Newsletter
            </Link>
            <Link className=" text-sm" to="/">
              Customer Service
            </Link>
          </div>
          <div className="middle flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="item flex items-center">
              <Link to="/" className=" text-2xl tracking-widest">
                URBANGLIDE
              </Link>
            </div>
          </div>

          <div className="right flex justify-evenly items-center gap-6">
            <div className="icons flex justify-evenly gap-3 relative">
              <div
                className="relative"
                onMouseEnter={handleAccountMouseEnter}
                onMouseLeave={handleAccountMouseLeave}
              >
                <div className="cursor-pointer flex items-center gap-2">
                  <PersonOutlineIcon
                    style={{ fontSize: "1.65rem", fontWeight: "100" }}
                    className="opacity-50"
                  />
                  <div>
                    {!isAuthenticated ? (
                      <span onClick={() => loginWithRedirect()}>Login</span>
                    ) : (
                      <span>My account</span>
                    )}
                  </div>
                </div>
                {isAccountHovered && <Myacc />}
              </div>

              <div className="fav flex items-center gap-2 cursor-pointer">
                <FavoriteBorderIcon
                  style={{ fontSize: "1.65rem", fontWeight: "100" }}
                  className="opacity-50"
                />
                <h2>Favourites</h2>
              </div>
              <div
                className="cart-icon cursor-pointer flex items-center gap-2"
                // onClick={() => setOpen(!open)}
                onMouseEnter={handleCartMouseEnter}
                onMouseLeave={handleCartMouseLeave}
              >
                <ShoppingBagOutlinedIcon
                  className="opacity-50"
                  style={{ fontSize: "1.65rem", fontWeight: "100" }}
                />
                <h2>Shopping Bag ({products.length})</h2>
                {isCartHovered && <Cart />}
              </div>
            </div>
          </div>
        </div>
        <div className="lower-nav px-8 flex w-full justify-between relative">
          <div className="left flex gap-10 w-full justify-center absolute left-1/2 transform -translate-x-1/2">
            <div className="item flex items-center ">
              <Link to="/products/1">Men</Link>
            </div>
            <div className="item flex items-center ">
              <Link to="/products/2">Women</Link>
            </div>
            <div className="item flex items-center ">
              <Link to="/products/3">Children</Link>
            </div>
            <div className="item flex items-center ">
              <Link to="/products/4">Accessories</Link>
            </div>
          </div>
          <div className="right w-48 gap-3 flex border-b-[1px] border-b-gray-600 items-center justify-end absolute right-0 cursor-pointer">
            <SearchIcon className="opacity-50" />
            <span className="w-48 text-sm">Search Products</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Navbar;
