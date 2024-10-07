import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Chat from "./components/Chat";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen w-screen grid grid-row-13 border-4">
        <Navbar />
        <div className=" row-span-12">
        <div className=" h-full grid grid-cols-6 ">
          <Sidebar />
          <Chat />
        </div>

        </div>
      </div>
    </>
  );
}
