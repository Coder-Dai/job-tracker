import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Client } from "appwrite";

const root = ReactDOM.createRoot(document.getElementById("root"));
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("646d0604df6385bc7d16");
  
root.render(<App />);
