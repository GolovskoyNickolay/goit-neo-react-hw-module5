import AppBar from "./AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Loader/Loader";
import css from "./App.module.css";
import { lazy, Suspense } from "react";
const HomePage = lazy(() => import("../pages/HomePage"));
const MoviesPage = lazy(() => import("../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

function App() {
  return (
    <>
      <AppBar />

      <div className={css.main}>
        <Suspense fallback={<Loader visible={true} />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:id" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </Suspense>
      </div>
    </>
  );
}

export default App;
