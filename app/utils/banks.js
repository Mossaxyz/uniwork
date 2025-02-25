const banks = [
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-natwest.png",
      name: "NatWest",
      id: "uk-natwest"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-barclays.png",
      name: "Barclays",
      id: "uk-barclays"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-lloyds.png",
      name: "Lloyds",
      id: "uk-lloyds"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-hsbc.png",
      name: "HSBC (UK)",
      id: "uk-hsbc"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-nationwide.png",
      name: "Nationwide Bank",
      id: "uk-nationwidebank"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/de-santander.png",
      name: "Santander (UK)",
      id: "uk-santander"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-monzo.png",
      name: "Monzo",
      id: "uk-monzo"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-revolut.png",
      name: "Revolut UK",
      id: "uk-revolut"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-halifax.png",
      name: "Halifax",
      id: "uk-halifax"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-rbs.png",
      name: "Royal Bank of Scotland",
      id: "uk-royalbankofscotland"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-tsb.png",
      name: "TSB Bank",
      id: "uk-tsbbank"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-starling.png",
      name: "Starling",
      id: "uk-starling"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-firtdirect.png",
      name: "First Direct",
      id: "uk-firstdirect"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-aib.png",
      name: "AIB",
      id: "uk-aib"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-bankofireland.png",
      name: "Bank of Ireland UK",
      id: "uk-bankofireland"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-bankofscotland.png",
      name: "Bank of Scotland",
      id: "uk-bankofscotland"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-barclays.png",
      name: "Barclaycard Personal",
      id: "uk-barclaycardpersonal"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-chase.png",
      name: "Chase UK",
      id: "uk-chase"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-coutts.png",
      name: "Coutts & Co",
      id: "uk-couttsundco"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/danskebank.png",
      name: "Danske Bank (UK)",
      id: "uk-danskebank"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-aib.png",
      name: "First Trust",
      id: "uk-firsttrust"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-mandsbank.png",
      name: "M&S Bank",
      id: "uk-mandsbank"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-sainsburysbank.png",
      name: "Sainsbury's Bank",
      id: "uk-sainsburysbank"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-tescobank.png",
      name: "Tesco Bank",
      id: "uk-tescobank"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-ulster.png",
      name: "Ulster Bank",
      id: "uk-ulsterbank"
    },
    {
      capabilities: ["pis"],
      test: false,
      default: true,
      currencies: ["GBP"],
      market: ["GB"],
      logo: "https://static.getivy.de/bank-logos/uk-virginmoney.png",
      name: "Virgin Money",
      id: "uk-virginmoney"
    }
  ];
  
  export default banks;
  