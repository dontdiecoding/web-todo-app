import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Views from "./pages/Views";
import Timeline from "./pages/Timeline";
import { RouterProvider } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/20/solid";
import { Square3Stack3DIcon } from "@heroicons/react/20/solid";
import { UserIcon } from "@heroicons/react/20/solid";
import { MapIcon } from "@heroicons/react/20/solid";

import './index.css';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/timeline",
      element: <Timeline />,
    },
    {
      path: "/views",
      element: <Views />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
  ]);

  if (router.state.location.pathname === "/") {
    router.navigate("/dashboard");
  }

  return (
    <>

    <div className="flex p-4 h-screen">
      <nav className="flex flex-col sticky rounded-lg p-4 bg-stone-900">
        <a href="/" className="text-2xl selection:invisible hover:cursor-pointer font-bold bg-gradient-to-r from-red-400 via-orange-300 to-yellow-400 inline-block text-transparent bg-clip-text">web-todo-app</a>
        
        <div id="bottom-links" className="flex flex-col justify-start h-full">
          
          <a className="flex text-lg px-2 py-2 text-stone-100 hover:text-stone-300" href="/dashboard"><UserIcon className="pr-2 h-6" />Dashboard</a>
          <a className="flex text-lg px-2 py-2 text-stone-100 hover:text-stone-300" href="/timeline"><MapIcon className="pr-2 h-6" />Timeline</a>
          <a className="flex text-lg px-2 py-2 text-stone-100 hover:text-stone-300" href="/views"><Square3Stack3DIcon className="pr-2 h-6"/>Views</a>
        </div>
        
        <div id="bottom-links" className="flex flex-col justify-end h-full">
          <a className="flex text-lg pl-2 py-2 text-stone-100 hover:text-stone-300" href="/settings"><Cog6ToothIcon className="pr-2 h-6"/>Settings</a>
        </div>
      </nav>

      <RouterProvider router={router} />
      </div>
    </>
  );

}
