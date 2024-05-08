import "./App.css";
import { Suspense, lazy, createElement } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Loader from "./components/Loader/Loader";
import Navbar from "./components/Navbar/Navbar";

const Home = lazy(() => import("./pages/home/Home"));
const Reader = lazy(() => import("./pages/reader/Reader"));
const Best = lazy(() => import("./pages/best/Best"));

const componentsMap = {
  Reader: Reader,
  Best: Best,
};

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/albw"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />

        {["Reader", "Best"].map((el, i) => (
          <Route
            path={"/albw/" + el.toLowerCase()}
            key={el + i}
            element={
              <Suspense fallback={<Loader />}>
                {createElement(componentsMap[el])}
              </Suspense>
            }
          />
        ))}

        {/* REDIRECT WHEN NOT A PATH */}
        <Route path="*" element={<Navigate to="/albw" />} />
      </Routes>
    </>
  );
}

export default App;
