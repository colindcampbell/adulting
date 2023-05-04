import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <nav>
        <ul>
          <li>
            <a href={`/recurring`}>Recurring</a>
          </li>
          <li>
            <a href={`/cashflow`}>Cash Flow</a>
          </li>
        </ul>
      </nav>
    ),
  },
  {
    path: "/recurring",
    element: <div>Recurring!</div>,
  },
  {
    path: "/cashflow",
    element: <div>Cash flow!</div>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
