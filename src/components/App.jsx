/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Frame } from "./Frame";
import { CashFlow } from "./CashFlow";

const Recurring = () => {
  return <div>Recurring!</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Frame>
        <Recurring />
      </Frame>
    ),
  },
  {
    path: "/recurring",
    element: (
      <Frame>
        <Recurring />
      </Frame>
    ),
  },
  {
    path: "/cashflow",
    element: (
      <Frame>
        <CashFlow />
      </Frame>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
