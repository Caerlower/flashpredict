# FlashPredict – AI-Curated Micro-Prediction Markets

LIVE LINK: https://flashpredict.vercel.app/

**FlashPredict** is a real-time, AI-powered prediction market built on **Linera** — the first real-time Layer-1 blockchain.
It enables users to create, trade, and resolve micro-markets around live events (e.g. “Will the next football goal happen in 3 minutes?”) with instant settlement and no congestion.

Each prediction market lives on its own **microchain**, giving users instant updates, predictable performance, and a smooth, Web2-like experience — fully decentralized.

---

## 🚀 Key Features

| Feature                           | Description                                                                                                                 |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| ⚡ **Per-Event Microchains**       | Each market (e.g. “Next Goal?”) runs on its own lightweight microchain for instant finality.                                |
| 🤖 **AI-Powered Market Creation** | AI agents monitor sports feeds, X posts, or APIs and automatically create new prediction markets.                           |
| 🧠 **MCP Integration**            | Uses the **Model Context Protocol (MCP)** for agent-to-chain interaction — enabling autonomous odds setting and resolution. |
| 📊 **Live Updates**               | Real-time odds, bets, and results with push-based UX using Linera’s event streaming APIs.                                   |
| 🏅 **Leaderboard & Rewards**      | Tracks user performance across microchains, with rewards in points or tokens.                                               |
| 🧩 **Open Oracle Layer**          | AI oracle pulls verified scores/data from external APIs and posts them to Linera microchains.                               |

---

## 🧩 Architecture Overview

```
+---------------------------------------------------+
|                     FlashPredict                  |
+---------------------------------------------------+
|                     Frontend                      |
|  React / Vite + WebSocket Live Updates            |
|  - Market Feed UI                                 |
|  - Real-time Odds Display                         |
|  - Wallet Connect (Linera Wallet / Pera)          |
+---------------------------------------------------+
|                     Backend                       |
|  Python FastAPI / Node.js MCP Agent               |
|  - AI Market Curator (GPT / Sports API)           |
|  - AI Oracle for Resolution                       |
|  - Market Event Broadcaster (GraphQL Subscription)|
+---------------------------------------------------+
|                     Linera Layer                  |
|  Microchain per Market                            |
|  - Market Creation Smart Contract                 |
|  - Betting Logic & Escrow                         |
|  - Instant Settlement & Leaderboard Sync          |
+---------------------------------------------------+
```

---

## ⚙️ Tech Stack

| Layer               | Technology                                              |
| ------------------- | ------------------------------------------------------- |
| **Blockchain**      | [Linera Testnet](https://linera.io)                     |
| **Smart Contracts** | Linera SDK (Rust)                                       |
| **Backend**         | Python (FastAPI + MCP Agent)                            |
| **Frontend**        | React + Vite + TailwindCSS                              |
| **Database**        | Supabase / SQLite (for off-chain caching & leaderboard) |
| **Oracles / AI**    | OpenAI / Sports APIs (LiveScore, ESPN, etc.)            |
| **Wallet**          | Linera Wallet or Pera Wallet via WebConnector           |

---

## 🧠 How It Works

### 1. AI Market Curation

* The **AI Agent** monitors a sports or live event feed (e.g. football match).
* When an interesting event is detected (“corner kick”, “free throw”, “penalty”), the agent **auto-creates a new market** using the Linera SDK.
* Example: `market_id = create_market("Next goal within 3 minutes?", odds=1.6)`

### 2. User Interaction

* Users browse **active micro-markets** on the frontend.
* They place predictions instantly — no latency, no congestion.
* All transactions settle on-chain in <1 second.

### 3. AI Oracle Resolution

* The **Oracle Agent** checks the live data feed every few seconds.
* When the event occurs or expires, it resolves the market by sending a **final result transaction** to the corresponding microchain.

### 4. Settlement & Rewards

* Smart contract instantly transfers winnings to users.
* Global leaderboard updates via an event listener.

---

## 🛠️ Setup & Installation

### 1️⃣ Prerequisites

* Node.js (v18+)
* Python (3.10+)
* Linera CLI installed and connected to Testnet
  → [Linera Docs](https://docs.linera.io/)
* Wallet (Linera Wallet or Pera Wallet)

---

### 2️⃣ Clone Repo

```bash
git clone https://github.com/caerlower/flashpredict.git
cd flashpredict
```

---

### 3️⃣ Smart Contract Deployment

```bash
cd contracts/
linera project build
linera project deploy --to testnet
```

After deployment, note the **market factory contract address**.

---

### 4️⃣ Backend Setup (AI Agent + Oracle)

```bash
cd backend/
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

Add environment variables in `.env`:

```bash
OPENAI_API_KEY=your_api_key
SPORTS_API_KEY=your_api_key
LINERA_RPC=https://rpc.testnet.linera.io
MARKET_FACTORY_ADDRESS=0x...
```

Run:

```bash
python main.py
```

---

### 5️⃣ Frontend Setup

```bash
cd frontend/
npm install
npm run dev
```

Visit: `http://localhost:5173`

Connect your wallet and start predicting!

---

## 🧩 Example Flow

| Step | Action                                                   | Actor             |
| ---- | -------------------------------------------------------- | ----------------- |
| 1    | AI Agent detects a live football match                   | MCP Agent         |
| 2    | Creates micro-market “Will a goal occur in next 3 mins?” | Smart Contract    |
| 3    | Users place bets (Yes/No)                                | Players           |
| 4    | Event outcome fetched from sports API                    | Oracle Agent      |
| 5    | Contract settles instantly                               | Linera Microchain |
| 6    | Winnings distributed + leaderboard updated               | On-chain          |

---

## 🧠 Linera SDK Features Used

* **Microchain-per-market** model
* **GraphQL Subscriptions** for live state updates
* **Event Streams** for instant UI refresh
* **Smart Contract Interactions** via Linera client
* **Predictable scalability** for per-user and per-market isolation

---

## 🧭 Future Roadmap

* 🪙 **Tokenized XP / Reputation System**
* 🤝 **Peer-to-peer liquidity markets**
* 📱 **Mobile app integration (React Native)**
* 🧩 **Cross-market arbitrage via AI bots**
* 🧠 **Multi-sport agent federation**
* 🔒 **TEE-based verification for oracle trust**

---

## 📜 License

MIT License © 2025 FlashPredict Builders
