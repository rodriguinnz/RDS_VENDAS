import React from "react"; // ✅ necessário
import "./App.css";
import AppRoutes from "./Routers";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
