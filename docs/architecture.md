# System Architecture

## Components
- Sensor Collector (MQTT publisher)
- AI Inference API (CNN/TFLite option)
- Recommender (RandomForest + Rules)
- Automation Controller (GPIO)
- Web Dashboard (Vue)
- Storage (SQLite)
- IPFS Client
- Payment Adapter (Pi Wallet)

## Data Flow
- Sensors → MQTT → Backend API → DB → Dashboard
- Camera → AI → Result → Recommendation/Alert
- “Apply” → Automation (GPIO) → Log → IPFS
- “Buy” → Pi Wallet → backend verify → unlock premium

## Security
- API key, rate limiting, and role-based premium access
- Payment receipt and signature verification (server-side)
- Domain validation for Pi Developer Portal (PiNet)
