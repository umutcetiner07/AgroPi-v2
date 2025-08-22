// netlify/functions/complete.js
exports.handler = async (event) => {
  try {
    // Demo: Tamamlama isteğini kabul ediyoruz.
    const { paymentId, txid } = JSON.parse(event.body || "{}");
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ result: "COMPLETED", paymentId, txid }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
