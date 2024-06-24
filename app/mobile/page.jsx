"use client";
import Image from "next/image";
import { useState } from "react";
import SelectCard from "../components/SelectCard/index";
import logo from "../../public/logo.png";
import header from "../../public/header.png";
import TuiPay from "./TuiPay/index.jsx";

export default function Page() {
  const [selectedCard, setSelectedCard] = useState("tuiPay");

  const handleClick = (cardId) => {
    setSelectedCard(cardId);
    console.log("selectedCard", cardId);
  };
  return (
    <div className="h-screen bg-white">
      {/* Banner */}
      <div className="flex bg-blue-500 w-100 h-19 justify-center items-center border border-gray-300 border-t-gray-300">
        <Image
          src={"https://static.tui.com/assets/v2/logos/tui/tui-logo.svg"}
          alt="header"
          width={80}
          height={80}
          className="m-3"
        />
      </div>

      {/* Payment Types */}
      <div className="flex">
        <div
          className="flex items-center m-2"
          onClick={() => handleClick("tuiPay")}
        >
          <figure
            className={`card xs payment-methods cursor-pointer clickable  level-5 ${
              selectedCard === "tuiPay" ? "selected" : "grey"
            }`}
            href="#"
            role="button"
            tabIndex="0"
          >
            <div className="">
              <Image src={logo} alt="" className="object-fill h-18 w-22 " />
            </div>
          </figure>
        </div>

        <div
          className="flex items-center m-2 "
          onClick={() => handleClick("card")}
        >
          <figure
            className={`card xs payment-methods cursor-pointer clickable  level-5 ${
              selectedCard === "card" ? "selected" : "grey"
            }`}
            href="#"
            role="button"
            tabIndex="0"
          >
            <div className="">
              <p>Card Payment</p>
            </div>
          </figure>
        </div>
      </div>
      {selectedCard === "tuiPay" && <TuiPay />}
    </div>
  );
}
