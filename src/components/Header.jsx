import { toast } from "react-toastify";
import { useState } from "react";

const Header = ({AddCoin, coin}) => {

  

  return (
    <div className="w-11/12 mx-auto">
      {/* navbar section */}
      <div className="navbar z-50 my-5 flex bg-white justify-between items-center sticky top-0 backdrop-filter backdrop-blur-lg bg-opacity-50">
        <div className="">
          <div className="bg-contain">
            <img
              className="btn py-1 mx-2 bg-transparent border-none"
              src="../assets/logo.png"
              alt="logo"
            />
          </div>
        </div>
        <div className="justify-center">
          <ul className="flex items-center gap-10">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Fixture</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Schedules</a>
            </li>
          </ul>
          <div className="flex items-center ml-10 mx-8 border-2 btn outline-none">
          {coin} Coin
            <img className="bg-fit mr-2" src="../assets/coin.png" alt="coin" />
          </div>
        </div>
      </div>

      {/* banner section */}
      <div className="border bg-[url(../assets/bg-shadow.png)] rounded-lg">
        <div className=" flex flex-col justify-center items-center space-y-4 p-8">
          <img src="../assets/banner-main.png" alt="logo" />
          <h2>Assemble Your Ultimate Dream 11 Cricket Team </h2>
          <h4>Beyond Boundaries Beyond Limits</h4>
          <button onClick={AddCoin} className="btn bg-yellow-600">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
