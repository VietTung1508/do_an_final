import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home/home.jsx";
import Product from "./Pages/ProductDetails/Product.jsx";
import Products from "./Pages/Products/Products.jsx";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import Admin from "./Pages/Admin/Admin.jsx";
import Dashboard from "./Pages/Admin/Pages/Dashboard/Dashboard.jsx";
import AdminCoupon from "./Pages/Admin/Pages/Coupon/AdminCoupon.jsx";
import AdminOrder from "./Pages/Admin/Pages/Order/AdminOrder.jsx";
import AdminProduct from "./Pages/Admin/Pages/Product/AdminProduct.jsx";
import AdminCategory from "./Pages/Admin/Pages/Category/AdminCategory.jsx";
import AdminUser from "./Pages/Admin/Pages/User/AdminUser.jsx";
import AdminProfile from "./Pages/Admin/Pages/AdminProfile/AdminProfile.jsx";
import AdminAuth from "./Pages/Admin/Pages/AdminAuth/AdminAuth.jsx";

import NewProduct from "./Pages/Admin/Pages/NewProduct/NewProduct.jsx";
import NewCategory from "./Pages/Admin/Pages/NewCategory/NewCategory.jsx";
import NewCoupon from "./Pages/Admin/Pages/NewCoupon/NewCoupon.jsx";
import Auth from "./Pages/Auth/Auth.jsx";
import Account from "./Pages/Account/Account.jsx";
import Cart from "./Pages/Cart/Cart.jsx";
import Payment from "./Pages/Payment/Payment.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
      {
        path: "/products",
        element: <Products/>,
      },
      {
        path: "/account/:setting",
        element: <Account />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },

  {
    path: "/admin",
    element: (
        <Admin>
          <Dashboard />
        </Admin>
    ),
  },
  {
    path: "/admin/auth",
    element: <AdminAuth />,
  },
  {
    path: "/admin/products",
    element: (
        <Admin>
          <AdminProduct />
        </Admin>
    ),
  },
  {
    path: "/admin/orders",
    element: (
        <Admin>
          <AdminOrder />
        </Admin>
    ),
  },
  {
    path: "/admin/users",
    element: (
        <Admin>
          <AdminUser />
        </Admin>
    ),
  },
  {
    path: "/admin/coupons",
    element: (
        <Admin>
          <AdminCoupon />
        </Admin>
    ),
  },
  {
    path: "/admin/categories",
    element: (
        <Admin>
          <AdminCategory />
        </Admin>
    ),
  },
  {
    path: "/admin/profile",
    element: (
        <Admin>
          <AdminProfile />
        </Admin>
    ),
  },
  {
    path: "/admin/profile",
    element: (
        <Admin>
          <AdminProfile />
        </Admin>
    ),
  },
  {
    path: "/admin/products/new",
    element: (
        <Admin>
          <NewProduct />
        </Admin>
    ),
  },
  {
    path: "/admin/categories/new",
    element: (
        <Admin>
          <NewCategory />
        </Admin>
    ),
  },
  {
    path: "/admin/coupons/new",
    element: (
        <Admin>
          <NewCoupon />
        </Admin>
    ),
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
]);
{/*  <BrowserRouter>*/}
{/*    <Routes>*/}
{/*      <Route path="/" element={ <App /> }>*/}
{/*      </Route>*/}
{/*    </Routes>*/}
{/*  </BrowserRouter>*/}

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
</React.StrictMode>
);
