import { BrowserRouter } from "react-router-dom"
import './App.css';
import Home from "./Pages/Home/Home";
import { Suspense } from "react";

function App() {
  return (

    <BrowserRouter>
    <Suspense>
      <div className="App">
        <Home />
      </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
