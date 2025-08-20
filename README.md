<p align="center">
  <img src="docs/logo.png" alt="AgroPi Logo" width="180"/>
  </p>
  # AgroPi v2

AI-powered smart farming and Pi-commerce platform.

AgroPi provides real-time monitoring with sensors, AI-based disease detection, and automation for irrigation/fertilization. With Pi Wallet micro-payments, growers can purchase premium nutrient recipes, on-demand consulting, and data-driven recommendations using Pi. IPFS ensures transparent data sharing.

## Highlights
- Real-time monitoring: EC, pH, temperature, humidity, light, CO2, camera.
- AI diagnosis: Leaf disease detection via CNN with tailored recommendations.
- Nutrient advice: RandomForest + rule-based recipes.
- Automation: GPIO relays to control irrigation and fertilization.
- Commerce: Premium recipes and consulting sold via Pi Wallet.
- Transparency: Upload logs to IPFS and verify via content hashes.

## Quick Start
- **Backend**
  - Python 3.10+
  - `cd backend && pip install -r requirements.txt`
  - `cp .env.example .env` and adjust variables
  - `flask run` (or `gunicorn wsgi:app`)
- **Frontend**
  - Node 18+
  - `cd frontend && npm install && npm run dev` (or `npm run build`)
- **Edge (Raspberry Pi)**
  - Run `edge/sensors.py`, `edge/automation.py`, `edge/inference_tflite.py`
  - Connect camera and sensors per `docs/usage_guide.md`

## Payments (Pi Wallet)
- Recipient: `GA7I7SXV6MA6TXEQCTHQH6EPUYXRL67YWAARKV7577RVG6FBS5XGJSV2`
- Example product: “Premium Nutrient Recipe (1 week)” – 1 PI
- Flow: Buy with Pi → Pi Wallet approval → backend verify → unlock premium
- Details: `docs/payment_notes.md`

## Docs
- Architecture: `docs/architecture.md`
- Usage: `docs/usage_guide.md`
- Demo script: `docs/demo_script.txt`
- Pitch: `docs/pitch.md`

## License
MIT (or your preferred license).
