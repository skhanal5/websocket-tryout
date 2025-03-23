import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./app/Layout";
import App from "./app/App";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
