import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/containers/Home";
import DetailContainer from "./components/containers/DetailContainer";
import Create from "./components/Create";
import PageNotFound from "./components/presentationals/PageNotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<DetailContainer />} />
        <Route exact path="/create" element={<Create />} />

        {/* Cuando ninguna otra ruta cargue, se renderizará la ruta debajo */}
        <Route
          path="*"
          element={
            <main>
              <PageNotFound />
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
