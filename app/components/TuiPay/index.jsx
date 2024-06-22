"use client";
import React, { useState, useEffect } from "react";
import SearchBank from "../SearchBank/index.jsx";
import up from "../../../public/chevron--top.svg";
import down from "../../../public//chevron--down.svg";
import "./styles.scss";
import UkBanks from "../../utils/UkBanks.json";
import createCheckout from "../../utils/createCheckout.js";
import Image from "next/image";

function TuiPay() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [search, setshowSearch] = useState(false);
  const [selectedBank, setSelectedBank] = useState(null);
  const [redirectUrl, setRedirectUrl] = useState(null);

  const Chevron = ({ search }) => {
    const imageSrc = search ? up : down;

    return <Image src={imageSrc} alt="chevron" className="chevron" />;
  };

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
    const receiveMessage = (event) => {
      const { source, type, value, redirectUrl, referenceId } = JSON.parse(
        JSON.stringify(event.data)
      );

      if (source !== "ivy" || type !== "iframe") {
        return;
      }

      if (value === "success") {
        // Handle success response
        console.log("User paid successfully", referenceId, redirectUrl);
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

  const showSearch = (value) => {};

  const renderBankLogos = () => {
    return UkBanks.banks.slice(0, 6).map((bank) => (
      <div key={bank.id} className="bank-item">
        <img src={bank.logo} alt={`${bank.name} logo`} className="bank-logo" />
      </div>
    ));
  };

  const handleClick = (cardId) => {
    setSelectedCard(cardId);
    console.log("selectedCard", cardId);
  };

  return (
    <div className="tuipay">
      <div className="text lead  normal">
        <h1>Pay instantly with your Bank</h1>
      </div>
      <div className="search">
        <div>
          <div className="find-bank-section">
            <div
              className="find-bank-input"
              onClick={() => setshowSearch(!search)}
            >
              {!selectedBank && <p className="">Find your bank</p>}

              {selectedBank && (
                <div className="bank" onClick={() => setshowSearch(!search)}>
                  <img
                    src={selectedBank.logo}
                    alt={selectedBank.name}
                    className="bank-logo"
                  />
                  {selectedBank.name}
                </div>
              )}

              <Chevron search={search} />
            </div>

            {search && (
              <SearchBank
                selectedBank={selectedBank}
                setSelectedBank={setSelectedBank}
                setshowSearch={setshowSearch}
                className="search-input"
              />
            )}
          </div>
        </div>
        <div className="available-banks">
          <div className="banks">{renderBankLogos()}</div>
          <p className="bank-description">
            We accept all major banks. All bank payments are secure, instant and
            fee-free.
          </p>
        </div>
      </div>

      {redirectUrl && (
        <div className="iframe-class">
          <iframe
            src={`${redirectUrl}&iframe=true&heigh&scroling=no&frameborder=0`}
            style={{ width: "100%", height: "600px" }}
          />
        </div>
      )}
    </div>
  );
}

export default TuiPay;
