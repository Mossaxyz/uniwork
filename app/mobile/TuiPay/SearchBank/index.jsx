"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./styles.scss";
// import testUkBank from "../../utils/testUkBank.json";
// import UkBanks from "./UkBanks.json";
import banks from "../../../utils/banks.js";
// import search from "../../../utils/search.svg";

function SearchBank({ selectedBank, setSelectedBank, setshowSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBanks, setFilteredBanks] = useState(banks);
  const [showBankList, setShowBankList] = useState(false);
  const [iframeView, setIframeView] = useState(false);
  const [redirectUrl, setRedirectUrl] = useState(null);


  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filtered = banks.filter((bank) =>
      bank.name.toLowerCase().includes(value)
    );
    setFilteredBanks(filtered);
    setShowBankList(true);
  };

  const handleSelectBank = (bank) => {
    setSelectedBank(bank);
    setShowBankList(false);
    setshowSearch(false);
    console.log("Selected bank:", bank);
  };

 
  return (
    <div className="search-bank">
      <div className="search-box">
        <label className="input input-text ">
          <div
            className="group"
            data-label="Input"
            onChange={handleSearch}
            onFocus={() => setShowBankList(true)}
          >
            <i className="icon-leading">
              <span
                className="icon"
                style={{
                  WebkitMaskImage:
                    "url(https://static.tui.com/assets/icons/tui-light/search.svg)",
                  maskImage:
                    "url(https://static.tui.com/assets/v2/icons/tui-light/search.svg)",
                  WebkitMaskSize: "cover",
                  maskSize: "cover",
                  backgroundColor: "currentColor",
                  display: "inline-block",
                  width: "1em",
                  height: "1em",
                }}
              />
            </i>
            <input type="text" pattern="\S+" placeholder="Input" />
          </div>
        </label>

        {showBankList && (
          <div className="bank-list">
            {filteredBanks.map((bank) => (
              <div
                key={bank.id}
                className="bank-item"
                onClick={() => handleSelectBank(bank)}
              >
                <img src={bank.logo} alt={bank.name} className="bank-logo" />
                {bank.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchBank;
