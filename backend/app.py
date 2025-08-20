import os
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": os.getenv("ALLOWED_ORIGINS", "*")}})

@app.get("/health")
def health():
    return jsonify(status="ok")

@app.post("/api/payment/verify")
def verify_payment():
    data = request.get_json(force=True)
    receipt = data.get("receipt")
    amount = float(data.get("amount", 0))
    recipient = os.getenv("PI_WALLET_RECIPIENT")
    min_price = float(os.getenv("PRICE_PI", "1.0"))

    # TODO: Verify receipt against Pi SDK/Server (signature, payer, memo, recipient)
    if not receipt or amount < min_price:
        return jsonify(ok=False, error="invalid_receipt_or_amount"), 400

    # TODO: Persist transaction and issue premium access token
    return jsonify(ok=True, token="demo-premium-token")
