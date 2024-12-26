import { useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import Home from "./pages/Home/Home";
import Layout from "./layouts/Layout/Layout";
import { publicRoutes } from "./routes";
import { Fragment, React } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let LayoutDf = Layout
            if(route.layout) {
              LayoutDf = route.layout;;
            }
            else if(route.layout === null){
              LayoutDf = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LayoutDf>
                    <Page />
                  </LayoutDf>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
