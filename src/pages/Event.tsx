import { useState } from "react";
import { useParams } from "react-router-dom";
import BackDrop from "../components/BackDrop";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="flex flex-col min-h-screen">
      <Header show={showSidebar} onToggleSidebar={handleSidebar} />
      <main className="flex flex-1 mt-[73px] lg:mt-0">
        {slug ? <Video /> : <div className="flex-1" />}
        <BackDrop show={showSidebar} onClick={handleSidebar} />
        <Sidebar show={showSidebar} onToggleSidebar={handleSidebar} />
      </main>
    </div>
  );
};

export default Event;
