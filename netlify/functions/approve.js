// netlify/functions/approve.js
exports.handler = async (event) => {
  try {
    // Pi SDK client, approve çağrısını burada bekler. Demo için direkt 200 döndürüyoruz.
    const { paymentId } = JSON.parse(event.body || "{}");
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ result: "OK", paymentId }),
    };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) };
  }
};
