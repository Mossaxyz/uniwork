function createCheckout() {
  return fetch(
    // Sandbox API, for production use https://api.getivy.de
    "https://api.sand.getivy.de/api/service/checkout/session/create",
    {
      headers: {
        "content-type": "application/json",
        // Never use your Ivy API key on client side. This is only for demo purposes.
        "X-Ivy-Api-Key":
          "661fa400d932522782c55186.3439dbb4-5e02-472d-b9dd-b980e272040b",
      },
      method: "POST",
      body: JSON.stringify({
        referenceId: self.crypto.randomUUID(), // Your unique identifier for the order/reference
        price: {
          total: 100,
          currency: "GBP",
        },
        guest: true, // Indicates a guest checkout, user does not need to log in
        locale: "en", // Checkout window language. Options: de, nl, en, fr, es, it, pt, sv
        successCallbackUrl: "/success",
        errorCallbackUrl: "http://localhost:8082/",
        market: "GB",
        paymentMode: "settlement",
        prefill: { bankId: "gb-token-natwestsandbox" },
        billingAddress: {
          country: "GB",
          line1: "5 swallowtail glade",
          city: "colchester",
          zipCode: "co30ah",
        },
        mandate: { setup: false },
        incentiveMode: "white_label",
      }),
    }
  )
    .then((result) => result.json())
    .then((data) => {
      // Opens the Ivy checkout web modal
      console.log(data);
      console.log("redierect: " + data.redirectUrl);
      return data.redirectUrl;
    })
    .catch((e) => console.error("Checkout failed", e));
}
export default createCheckout;
