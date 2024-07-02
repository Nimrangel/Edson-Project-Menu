import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../component/navbar/NavBar";
import Home from "../page/home/Home";
import About from "../page/about/About";
import Login from "../page/login/Login";
import Detail from "../page/detail/Detail";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          {/* for user login/membership */}
          <Route path="about" element={<PrivateRouter/>}>
            <Route path="" element={<About />} />
          </Route>
          
          {/* for user login/membership */}
          <Route path="detail" element={<PrivateRouter/>}>
            <Route path="" element={<Detail />} />
          </Route>
          
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
