import "./App.css";
import { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./pages/home/Home"));
const Reader = lazy(() => import("./pages/reader/Reader"));
const Best = lazy(() => import("./pages/best/Best"));
const Portals = lazy(() => import("./pages/portals/Portals"));

function App() {
  function DynamicPage() {
    const [page, setPage] = useState(null);
    const location = useLocation();

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      setPage(queryParams.get("page"));
    }, [location]);

    switch (page) {
      case "reader":
        return <Reader />;
      case "best":
        return <Best />;
      case "portals":
        return <Portals />;
      default:
        return <Home />;
    }
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/albw"
          element={
            <Suspense fallback={<Loader />}>
              <DynamicPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
