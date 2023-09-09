import * as React from "react";
import "./App.css";
import Trade from "./container/Trade";
import Profile from "./container/Profile";
import MyCenter from "./container/MyCenter";
import { Route, Routes, useSearchParams } from "react-router-dom";
import NavBar from "./components/NavBar";
import Orders from "./container/Orders";
import { useState, useEffect } from "react";
import Coin from "./container/Coin";

function App() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    // updating token if it's valid base64 and stopping localstorage value to get updated to null
    var base64regex =
      /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    if (base64regex.test(token) && token) localStorage.setItem("token", token);
  }, [searchParams]);
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route index path="/" element={<Trade />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycenter" element={<MyCenter />} />
        </Route>
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
