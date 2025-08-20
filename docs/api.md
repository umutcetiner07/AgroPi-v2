# AgroPi API Documentation

## Health Check
**GET** `/health`  
Returns:  
```json
{ "status": "ok" }

{
  "receipt": "string",
  "amount": 1.0
}
{ "ok": true, "token": "demo-premium-token" }
{ "ok": false, "error": "invalid_receipt_or_amount" }

{
  "timestamp": "2025-08-20T12:00:00Z",
  "ec": 1.8,
  "ph": 6.0,
  "temperature": 29,
  "humidity": 62,
  "light": 400,
  "co2": 800
}
{ "ok": true }

{
  "diagnosis": "Downy mildew risk: Medium",
  "recommendation": "Increase airflow; adjust EC to 1.6."
}
