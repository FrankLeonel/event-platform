import { Navigate, Route, Routes } from "react-router-dom";
import Event from "./pages/Event";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event" element={<Event />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
