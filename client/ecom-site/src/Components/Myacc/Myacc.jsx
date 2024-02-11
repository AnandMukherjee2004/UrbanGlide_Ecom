import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Myacc() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <div className=" w-40 py-5 px-2 absolute top-6 z-20 right-10">
          <ul className=" list-none flex flex-col gap-2">
            <li className=" text-sm  cursor-pointer">
              <Link>My Account</Link>
            </li>
            <li className=" text-sm  cursor-pointer">Membership Info</li>
            <li
              className=" text-xs  cursor-pointer"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: window.location.origin },
                })
              }
            >
              sign out
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Myacc;
