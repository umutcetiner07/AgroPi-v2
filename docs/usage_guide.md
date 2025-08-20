# AgroPi v2 – Usage Guide

## Prerequisites
- Raspberry Pi OS (camera enabled), Python 3.10+, Node 18+
- Sensors: EC, pH, temperature/humidity (e.g., DHT22), light, CO2, camera
- GPIO relay board and wiring per your greenhouse setup
- IPFS endpoint (local daemon or public API)

## Environment (backend/.env)
- AGROPI_DB=agropi.sqlite
- MQTT_BROKER=localhost:1883
- IPFS_API_URL=http://127.0.0.1:5001
- PI_PAYMENT_MODE=prod
- PI_WALLET_RECIPIENT=GA7I7SXV6MA6TXEQCTHQH6EPUYXRL67YWAARKV7577RVG6FBS5XGJSV2
- PRICE_PI=1.0
- SECRET_KEY=change_me
- ALLOWED_ORIGINS=http://localhost:5173

## Run
- Edge services:
  - python edge/sensors.py
  - python edge/inference_tflite.py
  - python edge/automation.py
- Backend API:
  - cd backend && flask run
- Frontend:
  - cd frontend && npm run dev

## Demo Flow
- Follow docs/demo_script.txt:
  - start sensors → upload leaf photo → AI result → Buy with Pi → show IPFS hash
- Use samples/ for example data.

## Troubleshooting
- Camera: sudo raspi-config → Interface Options → Camera
- GPIO: sudo usermod -aG gpio $USER
- MQTT: verify broker host/port and topic names
- IPFS: ensure ipfs daemon is running and API URL is correct
