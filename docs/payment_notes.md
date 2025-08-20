# Pi Wallet Payment Flow

## Product
- Premium Nutrient Recipe (1 week) — 1 PI

## Recipient
- GA7I7SXV6MA6TXEQCTHQH6EPUYXRL67YWAARKV7577RVG6FBS5XGJSV2

## Frontend (example intent)
- Show “Buy with Pi” button
- On click, create payment intent:
  - amount=1.0
  - memo=“AgroPi Premium Recipe – 1 week”
  - recipient=wallet above
- Use Pi Browser/SDK to open the payment flow
- On success, send receipt to backend for verification
- If verified, unlock premium content

## Backend
- Endpoint: POST /api/payment/verify
- Payload: { receipt, amount, payer, timestamp }
- Verify receipt/signature and match amount/recipient
- Record transaction in DB and issue an access token
- Respond with ok:true on success

## UI
- Success: unlock premium content and show gratitude
- Failure: show error and allow retry
