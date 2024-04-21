import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}
