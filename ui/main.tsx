import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { MainWrapper } from "./components/MainWrapper";
import { TracePage } from "./components/TracePage/TracePage";
import HomePage from "./pages/HomePage";
import TraceListPage from "./pages/TraceListPage";
import App from "./pages/App";


// take an input for prefix with alert and save it as a variable
const userPrefix = prompt("Please enter a prefix for your traces", "test");
// save it as a local storage variable
localStorage.setItem("prefix", userPrefix || "/");

const prefix = localStorage.getItem("prefix") || "/";
// change window location to prefix
window.history.pushState({}, "", prefix);


const router = createBrowserRouter(
  [
    {
      path: prefix,
      element: <App />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "traces/",
          element: <TraceListPage />,
        },
        {
          path: "traces/:traceId",
          element: <TracePage />,
        },
      ]
    },
    {
      path: "*",
      element: <Navigate to={prefix} />,
    },
  ],
);

createRoot(document.getElementById("root")!).render(
  <MainWrapper>
    <RouterProvider router={router} />
  </MainWrapper>,
);
