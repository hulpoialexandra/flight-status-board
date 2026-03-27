# ✈️ Flight Status Board

A React application that displays real-time flight information, similar to an airport departure board.

---

## 🚀 Features

- 📊 View flights with:

  - Flight number
  - Destination
  - Status (On Time, Delayed, Cancelled)
  - Gate
  - Departure time

- 🔍 Filter flights by status

- 🧩 Group flights by terminal (or no grouping)

- 🔄 Auto-refresh data

- ⚠️ Error handling with automatic retry

- 🎯 Simulated API failures (configurable failure rate)

- 🕒 Last updated timestamp

---

## 🛠 Tech Stack

- React + TypeScript
- Tailwind CSS

---

## 🧠 Architecture Highlights

- **Separation of concerns**

  - API layer handles data fetching & failure simulation
  - Custom hook (`useFlights`) manages state & retry logic
  - UI components are reusable and focused

- **Resilient data fetching**

  - Simulated network failures
  - Automatic retry mechanism (single retry with delay)

- **Dynamic UI**

  - Reusable table structure
  - Configurable columns based on grouping

---

## ⚙️ How It Works

- The app fetches flight data from a mocked API
- A configurable failure rate simulates unreliable networks
- On failure:

  - The app shows an error state
  - Automatically retries once after a delay

- Flights can be:

  - Filtered by status
  - Grouped by terminal or shown as a flat list

---

## 📦 Installation & Running

```bash
# install dependencies
npm install

# run the app
npm run dev
```

Then open:
http://localhost:5173

---

## 🚧 Possible Improvements

- Add unit tests (Jest / React Testing Library)
- Persist filters in URL
- Virtualized list for large datasets

---

## 📁 Project Structure

```

src/
api/
components/
hooks/
model/
utils/

```
