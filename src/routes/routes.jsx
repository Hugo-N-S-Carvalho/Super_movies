import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";

import Movies from "../containers/Movies";

import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";

function Router() {
  return (
    <Routes>
      <Route path="/super_movies/" element={<DefaultLayout />}>
        <Route path="/super_movies/" element={<Home />} />
        <Route path="/super_movies/filmes" element={<Movies />} />
        <Route path="/super_movies/series" element={<Series />} />
        <Route path="/super_movies/detalhe/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default Router;
