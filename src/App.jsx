import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import { useLocation } from "react-router-dom";
import Featured from "./components/featured/Featured";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="mt-12 flex flex-col items-center gap-[30px]">
        <Featured />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hotels",
        element: <List />,
      },
      {
        path: "/hotels/:id",
        element: <Hotel />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
