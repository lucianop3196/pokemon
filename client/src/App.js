import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/containers/Home";
import Detail from "./components/Detail";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/detail/:id" element={<Detail />} />
        <Route exact path="/create" element={<Create />} />

        {/* Cuando ninguna otra ruta cargue, se renderizará la ruta debajo */}
        <Route
          path="*"
          element={
            <main>
              {/* Colocar componente (RouteNotFound) */}
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
