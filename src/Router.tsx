import { Navigate, Route, Routes } from "react-router-dom";
import Event from "./pages/Event";
import Subscribe from "./pages/Subscribe";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
