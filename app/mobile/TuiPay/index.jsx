"use client";
import React, { useState, useEffect, useRef } from "react";
import SearchBank from "./SearchBank/index.jsx";
// import up from "../../../public/chevron--top.svg";
// import down from "../../../public//chevron--down.svg";
// import "./styles.scss";
// import UkBanks from "./UkBanks.json";
import banks from "../../utils/banks.js";
import createCheckout from "../../utils/createCheckout.js";
import Image from "next/image";

function TuiPay() {
  const [selectedBank, setSelectedBank] = useState(null);
  const [findBankFocus, setfindBankFocus] = useState(false);
  const [search, setshowSearch] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(null);
  const iframeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedBank !== null) {
      // Logic to handle selectedCard change, if any
      console.log("selectedBank changed:", selectedBank);

      const fetch = async () => {
        const url = await createCheckout();
        setRedirectUrl(url);
      };

      fetch();
    }
  }, [selectedBank]);

  useEffect(() => {
    const handleIframeLoad = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    };

    const receiveMessage = (event) => {
      let parsedData;

      try {
        parsedData = JSON.parse(event.data);
      } catch (error) {
        console.error("Failed to parse event data:", error);
        return;
      }

      const { source, type, value, redirectUrl, referenceId } = parsedData;

      if (source !== "ivy" || type !== "iframe") {
        return;
      }

      if (value === "success") {
        // Handle success response
        console.log("User paid successfully", referenceId, redirectUrl);

        const iframe = iframeRef.current;
        if (iframe) {
          iframe.addEventListener("load", handleIframeLoad);
          return () => iframe.removeEventListener("load", handleIframeLoad);
        }
        window.location.href = redirectUrl; // Redirect to success URL
      } else if (value === "error") {
        // Handle error response
        console.log("User closed Ivy Checkout");

        // Optionally redirect or handle error
      } else {
        // Handle unexpected response
        console.error("Unexpected message received", event.data);
      }
    };

    // Register the message event listener
    window.addEventListener("message", receiveMessage, false);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("message", receiveMessage, false);
    };
  }, []);

  const renderBankLogos = () => {
    return banks.slice(0, 6).map((bank) => (
      <div key={bank.id} className="rounded ">
        <img src={bank.logo} alt={`${bank.name} logo`} width={35} height={35} />
      </div>
    ));
  };

  // const handleClick = (cardId) => {
  //   setSelectedCard(cardId);
  //   console.log("selectedCard", cardId);
  // };

  return (
    <div ref={containerRef}>
      <div className="p-4 text lead normal">
        <h1>Pay instantly with your Bank</h1>
      </div>
      <div className="flex flex-col items-start space-y-2 p-4 mx-4 bg-gray-300 rounded-lg ">
        <div className="flex -ml-2 space-x-2">{renderBankLogos()}</div>
        <p className="text-sm text-gray-600">
          We accept all major banks. All bank payments are secure, instant, and
          fee free.
        </p>
      </div>

      <figure
        className={`flex flex-col mx-4 mt-4 w-11/12 card cursor-pointer clickable  level-0 ${
          findBankFocus === true ? "base" : "grey"
        }`}
        href="#"
        role="button"
        tabIndex="0"
      >
        <div
          className="flex justify-between m-4"
          onClick={() => setshowSearch(!search)}
        >
          {!selectedBank && <p className="">Find your bank</p>}

          {selectedBank && (
            <div
              className="flex items-center"
              onClick={() => setshowSearch(!search)}
            >
              <img
                src={selectedBank.logo}
                alt={selectedBank.name}
                className="bank-logo"
              />
              {selectedBank.name}
            </div>
          )}
          <Image src={"/updown.svg"} alt="up" width={20} height={20} />
        </div>
        {search && (
          <SearchBank
            selectedBank={selectedBank}
            setSelectedBank={setSelectedBank}
            setshowSearch={setshowSearch}
            className="search-input"
          />
        )}
      </figure>
      {redirectUrl && (
        <div className="iframe-class justify-start">
          <iframe
            ref={iframeRef}
            title="Iframe Example"
            src={`${redirectUrl}&iframe=true&heigh&scroling=no&frameborder=0`}
            style={{ width: "100%", height: "600px" }}
          />
        </div>
      )}
    </div>
  );
}

export default TuiPay;
