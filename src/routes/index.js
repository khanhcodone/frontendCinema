import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Payment from "../pages/Payment/Payment";
import Historys from "../pages/Historys/Historys";
import About from "../pages/About/About";
import Lienhe from "../pages/Lienhe/Lienhe";
import Info from "../pages/Info/Info";
import Sale from "../pages/Sale/Sale";
import Home from "../pages/Home/Home";
import Layout from "../layouts/Layout/Layout";
import Details from "../pages/Movie/Details";
import FoodAndDrink from "../pages/FoodPage/FoodAndDrink";
//Layout không cần đăng nhập cũng xem được
const publicRoutes = [
   {
      path: "/",
      component: Home,
   },
   {
      path: "/login",
      component: Login,
      layout: null,
   },
   {
      path: "/register",
      component: Register,
      layout: null,
   },
   {
      path: "/detail",
      component: Details,
   },
   {
      path: "/foodanddrink",
      component: FoodAndDrink,
   },
   {
      path: "/history",
      component: Historys,
   },
   {
      path: "/Info",
      component: Info,
   },
   {
      path: "/payment",
      component: Payment,
   },
   {
      path: "/about",
      component: About,
   },
   {
      path: "/lien-he",
      component: Lienhe,
   },
   {
      path: "/sale",
      component: Sale,
   },
];
//Layout cần đăng nhập mới xem được
const privateRoutes = [];

export { publicRoutes, privateRoutes };
