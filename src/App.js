import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Form, HomePage, Error} from "./pages/"
import MainLayout from "./pages/MainLayout";
import "./components/common/variables.css"

const App = () => {
  return (
    <div className="app-container">
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout/>}>
        <Route path = "/" element={<HomePage/>} />
        <Route path = "/form" element={<Form/>} />
        <Route path="/*" element={<Error/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
