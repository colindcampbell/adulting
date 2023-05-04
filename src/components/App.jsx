/* eslint-disable react/prop-types */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Frame } from "./Frame";

const Recurring = () => {
  return <div>Recurring!</div>;
};

const CashFlow = () => {
  return <div>Cash flow!</div>;
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
