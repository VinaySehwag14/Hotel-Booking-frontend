import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Navbar from "./components/Navbar";
import Header from "./components/Header/Header";
import { useLocation } from "react-router-dom";
import Featured from "./components/featured/Featured";
import PropertyList from "./components/PropertyList/PropertyList";
import FeaturedProperties from "./components/featuredProperties/FeaturedProperties";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <div className="mt-12 flex flex-col items-center gap-[30px]">
        <Featured />
        <h1 className="w-[1024px] text-xl font-bold">
          Browse by property type
        </h1>
        <PropertyList />
        <h1 className="w-[1024px] text-xl font-bold">Homes guests love</h1>
        <FeaturedProperties />
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
