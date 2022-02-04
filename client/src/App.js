import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Create from "./components/Create";

function App() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/home/:id" element={<Detail />} />
        <Route exact path="/Create" element={<Create />} />

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
