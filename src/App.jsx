import NewApp from "./components/NewApp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewApp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
