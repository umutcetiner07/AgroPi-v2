export async function buyPremium() {
  const amount = 1.0;
  const recipient = "GA7I7SXV6MA6TXEQCTHQH6EPUYXRL67YWAARKV7577RVG6FBS5XGJSV2";
  const memo = "AgroPi Premium Recipe – 1 week";

  try {
    // Pi Browser / SDK integration point
    const receipt = await window.Pi?.createPayment?.({ amount, recipient, memo });

    const res = await fetch("/api/payment/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ receipt, amount })
    });
    const json = await res.json();
    if (json.ok) {
      // unlock premium content
      return true;
    }
    return false;
  } catch (e) {
    console.error("Payment failed", e);
    return false;
  }
}
