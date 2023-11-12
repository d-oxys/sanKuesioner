import { useState, ReactNode } from "react";
import ListDashboard from "./listDashboard";
import ListGuru from "./listGuru";
import ListKepalaSekolah from "./listKepalaSekolah";
import ListLogout from "./listLogout";
import "tailwindcss/tailwind.css";

interface CardProps {
  children: ReactNode;
}

function Dashboard({ children }: CardProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="left-0 top-0 flex h-[7vh] w-full items-center justify-end bg-[#3C8DBC] p-8 shadow-md shadow-slate-300">
        <button
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`absolute left-0 top-0 z-[9999] ml-3 mt-2 block items-center rounded-lg p-2 text-sm text-gray-500 transition-transform duration-200 ease-in-out hover:bg-gray-100 focus:outline-none focus:ring-2 dark:text-gray-400 dark:hover:bg-gray-700 sm:hidden ${
            isSidebarOpen ? "translate-x-52" : ""
          }`}
        >
          <span className="sr-only">Open sidebar</span>
          <svg className="h-6 w-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>
        <h2 className="bold text-end text-2xl text-white">PKG</h2>
      </div>
      <div className="flex min-h-screen bg-gray-200 dark:bg-gray-800">
        <aside id="default-sidebar" className={`absolute left-0 z-40 h-screen w-64 transition-transform md:sticky ${isSidebarOpen ? "translate-x-0" : " -translate-x-full"} sm:translate-x-0`} aria-label="Sidebar">
          <div className="h-full overflow-y-auto bg-[#222D32] px-3 py-4 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <ListDashboard />
              <ListGuru />
              <ListKepalaSekolah />
              <ListLogout />
            </ul>
          </div>
        </aside>
        <main className="flex-1 overflow-auto p-6 ">
          {/* Add your content here */}
          {children}
        </main>
      </div>
      <div className="bottom-0 left-0 flex h-[7vh] w-full items-center bg-white shadow-lg shadow-slate-300">
        <p className="ml-4 text-xs font-bold text-black">
          Developed by{" "}
          <a className="text-blue-500" href="https://www.linkedin.com/in/michsannr/">
            Doxys
          </a>{" "}
          2023 v1.0 © PKG_SL
        </p>
      </div>
    </>
  );
}
export default Dashboard;
