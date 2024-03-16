const DonateButton = (): JSX.Element => {
  interface CheckoutSessionResponse {
    url: string;
  }

  interface CheckoutItem {
    id: number;
    quantity: number;
  }

  const items: CheckoutItem[] = [
    { id: 1, quantity: 3 },
    { id: 2, quantity: 1 },
  ];

  const makePayment = () => {
    fetch("http://localhost:3000/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: items,
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then((response: CheckoutSessionResponse) => {
        window.location.href = response.url
      })
      .catch((e) => {
        console.error(e.error);
      });
  };

  return (
    <button
      className="mt-3 mb-1 py-2 px-4 bg-violet-500 hover:bg-violet-700 rounded-md text-white font-bold text-base"
      onClick={makePayment}
    >
      Donate
    </button>
  );
};

export default DonateButton;
