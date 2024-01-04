import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";

import Movies from "../containers/Movies";

import Series from "../containers/Series";
import DefaultLayout from "../layout/DefaultLayout";
import Detail from "../containers/Detail";
// import { element } from "prop-types";

// import Teste from "../containers/Teste";

function Router() {
  return (
    <Routes>
     
      <Route path="/cine_code/" element={<DefaultLayout />}>
        <Route path="/cine_code/" element={<Home />} />
        <Route path="/cine_code/filmes" element={<Movies />} />
        <Route path="/cine_code/series" element={<Series />} />
        <Route path="/cine_code/detalhe/:id" element={<Detail />} />
        {/* <Route path="/super_movies/teste" element={<Teste />}/> */}
      </Route>
    </Routes>
  );
}

export default Router;
