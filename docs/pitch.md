# AgroPi – AI-powered smart farming and Pi-commerce on Pi Network

## Summary
AgroPi is a smart farming solution combining Raspberry Pi–based sensors, AI disease detection, and automation (irrigation/fertilization). With Pi Wallet micro-payments, growers can purchase premium nutrient recipes, on-demand consulting, and data-driven recommendations using Pi. IPFS stores data for transparency and trust. The goal is to boost productivity for small and medium-scale growers and create a farming-focused commerce layer in the Pi ecosystem.

## Problem
Smallholders lack accessible AI+IoT tools and a trusted marketplace for agronomic services. Diseases are detected late, nutrient management is guesswork, and transparency is low.

## Solution
- Sensors: EC, pH, temperature, humidity, light, CO2, camera.
- AI: CNN leaf disease detection; RandomForest + rules for nutrient recommendations.
- Automation: GPIO relays for irrigation/fertilization control.
- Commerce: Premium recipes and consulting via Pi Wallet payments.
- Transparency: Upload data to IPFS and verify with content hashes.

## Tech
Python/Flask, MQTT, SQLite; TensorFlow, scikit-learn; Vue.js; Raspberry Pi; IPFS; Pi payments.

## Status
Sensors and relays operational, AI 80%+ accuracy, frontend in beta. Pi payment flow enabled with production wallet. IPFS flow ready.

## Milestones
- Pi Browser beta with payment flow
- Full IPFS integration and sharing
- Cooperative usage scenario
- Mobile UX improvements
