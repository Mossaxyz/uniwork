"use client";
import Image from "next/image";
import { useState } from "react";
import SelectCard from "../components/SelectCard/index";
import logo from "../../public/logo.png";
import header from "../../public/header.png";
import TuiPay from "../components/TuiPay/index.jsx";
import "./App.scss";

export default function Page() {
  const [selectedCard, setSelectedCard] = useState("tuiPay");

  const handleClick = (cardId) => {
    setSelectedCard(cardId);
    console.log("selectedCard", cardId);
  };
  return (
    <main className="flex min-h-screen mb-8 flex-col  p-24">
      <Image src={header} alt="header" />

      <div className="flex justify-start ">
        <SelectCard
          ischecked={selectedCard === "tuiPay"}
          onClick={() => handleClick("tuiPay")}
          logo={logo}
          subtitle="recommended"
        />

        <SelectCard
          ischecked={selectedCard === "cardPayment"}
          onClick={() => handleClick("cardPayment")}
          title="Card Payment"
          subtitle=""
        />
      </div>

      {selectedCard === "tuiPay" && <TuiPay />}
    </main>
  );
}
