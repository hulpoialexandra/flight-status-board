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
## 📁 Project Structure

```

src/
api/
components/
hooks/
model/
utils/

```
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

## 💬 Notes on Implementation

- **What I implemented myself**

  - Application architecture and component structure
  - Sorting, filtering and grouping logic
  - API integration and data mapping
  - Error / Loading states, retry mechanism and failure simulation
  - Optimization to prevent unnecessary re-renders (by comparing data)
  - UI components

- **What I used AI for**
  
  - Components styling - Tailwind-based layout and styling
  - Generating and refining the README file
  - Code review, small refactors and improvements
  - Improving utility functions (e.g. generic grouping, time mapping logic)
   
- **One decision I'd make differently with more time**
  
  - Consider adding a virtualized list to optimize rendering for large datasets.
  - Introduce a lightweight state management solution (e.g. Zustand) if the app grows in complexity
  - Improve UI design, responsiveness, and accessibility

